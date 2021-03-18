import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import ResultScreen from '../screens/ResultScreen';
import MathsQuiz from '../screens/MathsQuiz';
import AllQuizList from '../components/AllQuizList/index';

import MyTab from './MyTab';


function MyStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name ='Welcome' component={WelcomeScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='MyTab' component={MyTab}/>
            <Stack.Screen options={{headerShown: false}} name ='Maths' component={MathsQuiz}/>
            <Stack.Screen options={{headerShown: false}} name ='AllQuiz' component={AllQuizList}/>
            <Stack.Screen options={{headerShown: false}} name ='Results' component={ResultScreen}/>
      </Stack.Navigator>
    )
}

export default MyStack