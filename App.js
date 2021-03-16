import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from './src/components/TabBar/index';

import Notification from './src/screens/NotificationScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';
import MathsQuiz from './src/screens/MathsQuiz';
import AllQuizList from './src/components/AllQuizList/index';
import SettingsScreen from './src/screens/SettingsScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

function theFooter() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Menu" component={HistoryScreen} />
  </Tab.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name ='Login' component={LoginScreen}/>
      <Stack.Screen options={{headerShown: false}} name ='Signup' component={SignUpScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='Welcome' component={WelcomeScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='Footer' component={theFooter}/>
            <Stack.Screen options={{headerShown: false}} name ='Maths' component={MathsQuiz}/>
            <Stack.Screen options={{headerShown: false}} name ='Notification' component={Notification}/>
            <Stack.Screen options={{headerShown: false}} name ='AllQuiz' component={AllQuizList}/>
            <Stack.Screen options={{headerShown: false}} name ='Results' component={ResultScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
