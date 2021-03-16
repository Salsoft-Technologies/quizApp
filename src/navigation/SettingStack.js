import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import MathsQuiz from '../screens/MathsQuiz';
import ResultScreen from '../screens/ResultScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AllQuizList from '../components/AllQuizList/index';

const Stack = createStackNavigator()

const SettingStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name ='Notification' component={NotificationScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='Results' component={ResultScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='Maths' component={MathsQuiz}/>
            <Stack.Screen options={{headerShown: false}} name ='Welcome' component={WelcomeScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='AllQuiz' component={AllQuizList}/>
        </Stack.Navigator>
    )
}

export default SettingStack;