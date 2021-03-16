import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import styles from './styles';

function WelcomeScreen({navigation}) {
  const [name, setName] = useState('');
  const renderLogo = () => {
    return (
      <Image
        resizeMode="center"
        style={styles.quizLogo}
        source={require('../assets/images/quizIcons/logo.png')}
      />
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
            <Text style={styles.buttonTextEmpty}>E N T E R   Y O U R   N A M E</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Footer', {
                screen: 'Home',
                params: {name},
              })
            }>
            <Text style={styles.buttonText}>E N T E R   Y O U R   N A M E</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View style={styles.mainWelcomeScreen}>
      <StatusBar backgroundColor="#12172e" />
      {renderLogo()}
      {renderEnterName()}
    </View>
  );
}

export default WelcomeScreen;
