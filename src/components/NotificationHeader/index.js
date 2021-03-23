import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function NotificationHeader(props){
  
  const notificationHeader = () => {
    return (
      <View style={styles.notificationHeaderView}>
        <Text style={styles.notificationHeaderText}>{props.title}</Text>
      </View>
    );
  };

  return(
      <>
          {notificationHeader()}
      </>
  )
}

  export default NotificationHeader