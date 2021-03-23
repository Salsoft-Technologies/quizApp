import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen/index';
import ResultScreen from '../screens/ResultScreen/index';
import MathsQuiz from '../screens/MathsQuiz/index';
import AllQuizList from '../components/AllQuizList/index';
import AboutScreen from '../screens/AboutScreen/index';
import OptionalFooter from '../components/OptionalFooter/index';

import MyTab from './MyTab';


function MyStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name ='Welcome' component={WelcomeScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='MyTab' component={MyTab}/>
            <Stack.Screen options={{headerShown: false}} name ='Maths' component={MathsQuiz}/>
            <Stack.Screen options={{headerShown: false}} name ='About' component={AboutScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='AllQuiz' component={AllQuizList}/>
            <Stack.Screen options={{headerShown: false}} name ='Results' component={ResultScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='OptionalFooter' component={OptionalFooter}/>

      </Stack.Navigator>
    )
}

export default MyStack