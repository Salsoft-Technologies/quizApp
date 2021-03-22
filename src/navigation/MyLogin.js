import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/index';
import SignUpScreen from '../screens/SignUpScreen/index';

function MyLogin(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name ='Signup' component={SignUpScreen}/>
            <Stack.Screen options={{headerShown: false}} name ='Login' component={LoginScreen}/>
      </Stack.Navigator>
    )
}

export default MyLogin