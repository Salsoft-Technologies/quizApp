import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';

function SignUpScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');

  const renderLogo = () => {
    return (
      <Image
        resizeMode="center"
        style={styles.quizLogo}
        source={require('../assets/images/quizIcons/logo.png')}
      />
    );
  };

  const signUp = () => {
      if(email != '' & password != '' & age != '' & country != ''){
          navigation.navigate('Welcome')
      }else{
          alert('Some fields are missing');
      }
  }

  const renderSignUpTextBoxes = () => {
      return(
        <KeyboardAwareScrollView>
        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
          keyboardType='email-address'
        />

        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
        />

        
        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setAge(text)}
          value={age}
          placeholder="Age"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
          keyboardType='numeric'
        />

        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setCountry(text)}
          value={country}
          placeholder="Country"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
          
        />

        

        <TouchableOpacity onPress={signUp} style={{paddingTop: 10}}>
        <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.noAccountView}>
            <Text style={styles.noAccountText}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={styles.createHereText}> Sign In here</Text></TouchableOpacity>
        </View>

        
       
      </KeyboardAwareScrollView>
      )
  }
  return (
    <View style={styles.mainWelcomeScreen}>
      <StatusBar backgroundColor="#12172e" />
      {renderLogo()}
      {renderSignUpTextBoxes()}
    </View>
  );
}

export default SignUpScreen;
