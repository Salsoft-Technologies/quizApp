import React from 'react';
import 'react-native-gesture-handler';
import TabBar from '../components/TabBar/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/index';
import Notification from '../screens/NotificationScreen/index';
import SettingsScreen from '../screens/SettingsScreen/index';
import HistoryScreen from '../screens/HistoryScreen/index';



function MyTab(){
    const Tab = createBottomTabNavigator();
    return(
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Menu" component={HistoryScreen} />
  </Tab.Navigator>
    )
}

export default MyTab