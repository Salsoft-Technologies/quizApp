import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Tab = ({tab, icon, onPress, color, selected, text}) => {
  return (
    <View style={[styles.mainView, {backgroundColor: color}]}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {/* <Image style={{height:30, width: 30}} 
        source={require('../../assets/images/navigation/home.png')}/> */}

        {tab.name === 'Home' ? (
          <Image
            style={styles.navIconSize}
            source={require('../../assets/images/navigation/home.png')}
          />
          
        ) : tab.name === 'Notification' ? (
          <Image
            style={styles.navIconSize}
            source={require('../../assets/images/navigation/notification.png')}
          />
        ) : tab.name === 'Settings' ? (
          <Image
            style={styles.navIconSize}
            source={require('../../assets/images/navigation/setting.png')}
          />
        ) : tab.name === 'Menu' ? (
          <Image
            style={styles.navIconSize}
            source={require('../../assets/images/navigation/levels.png')}
          />
        ) : (
          <Image
            style={styles.navIconSize}
            source={require('../../assets/images/navigation/home.png')}
          />
        )}
      </TouchableOpacity>

     
{/* 
      {tab.name === 'Home' ? (
        <Text style={styles.navTextStyle}>Home</Text>
      ): tab.name === 'Notification' ? <Text style={styles.navTextStyle}>Notification</Text> : <Text></Text> } */}

   

    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'row',
  },

  navIconSize: {
    height: 25,
    width: 25,
  },

  navTextStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#36d8f7',
    marginLeft: 5,
  },
});

export default Tab;
