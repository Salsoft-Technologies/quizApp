import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function NotificationHeader(props){
  NotificationHeader.propTypes = {
    title: PropTypes.string
  };
  
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