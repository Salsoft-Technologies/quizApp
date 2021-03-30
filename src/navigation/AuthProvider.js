import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            switch (e.code) {
              case 'auth/wrong-password':
                alert('Incorrect Email or Password');
                break;
              case 'auth/user-not-found':
                alert('User does not exist');
                break;
              case 'auth/invalid-email':
                alert('Email does not exist');
                break;
              case 'auth/too-many-requests':
                alert(
                  'User is temporary disabled due to frequent trying to log in',
                );
                break;
            }
            console.log(e);
            // alert(e);
          }
        },

        googleLogin: async () => {
          try {
            //Get the users id token
            const {idToken} = await GoogleSignin.signIn();
            console.log(idToken);
            // // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(
              idToken,
            );
            console.log(googleCredential);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (e) {
            // console.log(e);
            alert(e);
          }
        },

        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (e) {
            // console.log(e);
            alert(e);
          }
        },

        register: async (email, password, age, country) => {
          try {
            await auth().createUserWithEmailAndPassword(
              email,
              password,
              age,
              country,
            );
            console.log('successful');
          } catch (e) {
            switch (e.code) {
              case 'auth/email-already-in-use':
                alert('Email address already exists');
                break;
              case 'auth/invalid-email':
                alert('Invalid Email');
                break;
              case 'auth/weak-password':
                alert('Weak Password is not allowed');
                break;
            }
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
