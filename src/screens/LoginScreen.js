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

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const renderLogo = () => {
    return (
      <Image
        resizeMode="center"
        style={styles.quizLogo}
        source={require('../assets/images/quizIcons/logo.png')}
      />
    );
  };

  const login = () => {
      if(email != '' & password != ''){
          navigation.navigate('Welcome')
      }else{
          alert('Enter email and password')
      }
  }

  const renderLoginTextBoxes = () => {
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

        <TouchableOpacity onPress={login} style={{paddingTop: 10}}>
        <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.noAccountView}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Signup')}><Text style={styles.createHereText}>Create here</Text></TouchableOpacity>
        </View>

        
       
      </KeyboardAwareScrollView>
      )
  }
  return (
    <View style={styles.mainWelcomeScreen}>
      <StatusBar backgroundColor="#12172e" />
      {renderLogo()}
      {renderLoginTextBoxes()}
    </View>
  );
}

export default LoginScreen;
