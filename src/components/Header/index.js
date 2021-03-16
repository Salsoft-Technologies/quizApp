import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';


function HomeScreen(props) {
    const renderHeader = () => {
      return (
        <View style={styles.headerMainView}>
          <View style={styles.headerRowView}>
            <Image
              style={styles.profilePicture}
              source={require('../../assets/images/quizIcons/logo.png')}
            />
  
            <View style={styles.headerTextView}>
              <Text style={styles.headerTextStyle}>{props.title}</Text>

            </View>
          </View>
        </View>
      );
    };

    return (
        <View>
          {renderHeader()}
        </View>
      );
}


export default HomeScreen