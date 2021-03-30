import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../../navigation/AuthProvider';
import styles from './styles';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  const renderLogo = () => {
    return (
      <View>
        <Image
          resizeMode="contain"
          style={styles.quizLogo}
          source={require('../../assets/images/quizIcons/logo.png')}
        />
      </View>
    );
  };

  const checkLoginHandler = (email, password) => {
    if ((email === '', password === '')) {
      alert('Incorrect email and password');
    } else {
      login(email, password);
    }
  };

  const renderLoginTextBoxes = () => {
    return (
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
        />

        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={() => checkLoginHandler(email, password)}
          style={{paddingTop: 10}}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {/* {
          Platform.OS === 'android' ? (
            <>
         
            </>
          ) : null
        } */}

        <TouchableOpacity
          style={styles.loginWithGoogleButton}
          onPress={() => googleLogin()}>
          <Text style={styles.loginWithGoogleButtonText}>
            Login with Google
          </Text>
          <Image
            resizeMode="contain"
            style={styles.loginWithGoogleButtonIcon}
            source={require('../../assets/images/quizIcons/google.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginWithFacebookButton}
          onPress={() => fbLogin()}>
          <Text style={styles.loginWithFacebookButtonText}>
            Login with Facebook
          </Text>
          <Image
            resizeMode="contain"
            style={styles.loginWithFacebookButtonIcon}
            source={require('../../assets/images/quizIcons/fb.png')}
          />
        </TouchableOpacity>

        <View style={styles.noAccountView}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.createHereText}>Create here</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  };
  return (
    <View style={styles.mainWelcomeScreen}>
      <StatusBar backgroundColor="#12172e" />
      {renderLogo()}
      {renderLoginTextBoxes()}
    </View>
  );
}

export default LoginScreen;
