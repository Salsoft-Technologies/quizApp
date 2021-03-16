import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../components/TabBar/index';
import Notification from '../screens/NotificationScreen';


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Settings" component={HomeScreen} />
        <Tab.Screen name="Menu" component={HomeScreen} />
      </Tab.Navigator>
  );
}

export default TabNavigator;
