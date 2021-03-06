import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
function WelcomeScreen({navigation}) {
  const [name, setName] = useState('');

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

  const renderEnterName = () => {
    return (
      <View>
        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Example: John Doe"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
        />

        {name === '' ? (
          <TouchableOpacity>
            <Text style={styles.buttonTextEmpty}>
              E N T E R Y O U R N I C K
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyTab', {
                screen: 'Home',
                params: {name},
              })
            }>
            <Text style={styles.buttonText}>E N T E R Y O U R N I C K</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.mainWelcomeScreen}>
      <StatusBar backgroundColor="#12172e" />
      {renderLogo()}
      {renderEnterName()}
    </KeyboardAwareScrollView>
  );
}

export default WelcomeScreen;
