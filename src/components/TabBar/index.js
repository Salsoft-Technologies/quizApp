import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';
import Tab from './Tab';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const {routes} = state;
  const [selected, setSelected] = useState('Home');
  const renderColor = (currentTab) =>
    currentTab === selected ? '#e6fafe' : 'transparent';

  const renderText = (currentTab) => {
    currentTab === selected ? 'Home' : ''
  }
  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      
      navigation.navigate(activeTab);
    }
  };

  const theTab = selected;
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
            text={theTab}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width,
    padding: 1.5 * vw,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width,
    justifyContent: 'space-evenly',
  },
});
export default TabBar;
