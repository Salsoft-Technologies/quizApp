import React, {useContext} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../navigation/AuthProvider';


function HomeScreen(props) {
  const {logout} = useContext(AuthContext);
    const renderHeader = () => {
      return (
        <View style={styles.headerMainView}>
        <View style={styles.headerRowView}>
        <Image style={styles.profilePicture} source={require('../../assets/images/quizIcons/logo.png')}/>
        <View style={styles.headerTextView}>
        <Text style={styles.headerTextStyle}>{props.title}</Text>
        </View>
        </View>

        <TouchableOpacity onPress={()=> logout()} style={styles.logoutButton}>
          <Image source={require('../../assets/images/quizIcons/logout.png')}/>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        </View>
      );
    };

    return (
        <>
        <StatusBar backgroundColor='#2a2b31'/>
          {renderHeader()}
        </>
      );
}


export default HomeScreen