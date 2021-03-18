/**
 * @format
 */
import React from 'react';
import {AuthProvider} from './src/navigation/AuthProvider';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Providers);

const Providers = () => {
    return(
        <AuthProvider>
            <App/>
        </AuthProvider>
    )
}

export default Providers;



