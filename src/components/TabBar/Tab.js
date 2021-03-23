import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

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
    borderRadius: 2.8 * vw,
    paddingHorizontal: 3.5 * vw,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2.5 * vw,
    flexDirection: 'row',
  },

  navIconSize: {
    height: 3.8 * vh,
    width: 2.8 * vh,
  },

  navTextStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#36d8f7',
    marginLeft: 1.5 * vw,
  },
});

export default Tab;
