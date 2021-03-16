import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import NotificationHeader from '../components/NotificationHeader/index';

function NotificationScreen({route}) {
  const [notify, setNotify] = useState([
    {
      id: 1,
      alert: 'What a great Idea!',
      description:
        'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
    },

    {
        id: 2,
        alert: 'What a great Idea!',
        description:
          'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
      },

      {
        id: 3,
        alert: 'What a great Idea!',
        description:
          'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
      },

      {
        id: 4,
        alert: 'What a great Idea!',
        description:
          'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
      },

      {
        id: 5,
        alert: 'What a great Idea!',
        description:
          'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
      },
      {
        id: 6,
        alert: 'What a great Idea!',
        description:
          'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
      },
      {
        id: 7,
        alert: 'What a great Idea!',
        description:
          'First you need import components to your code. To use the component, copy and paste an example from the CODE tab',
      },
  ]);

  const _notificationItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.notificationButtonContainer}>
        <View
          style={styles.notificationContainer}>
          <Image
            style={styles.notificationIcon}
            source={require('../assets/images/quizIcons/notify.png')}
          />
          <View style={styles.notificationTextView}>
            <Text style={styles.notificationTextAlert}>
              {item.alert}
            </Text>
            <Text style={styles.notificationDescriptionText}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.notificationMainScreen}>
      <StatusBar backgroundColor="#12172e" />
      <NotificationHeader title='Notification'/>
      <FlatList
        data={notify}
        renderItem={_notificationItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default NotificationScreen;
