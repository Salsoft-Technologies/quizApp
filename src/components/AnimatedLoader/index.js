import React, {useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

function Loader(){
    return(
       <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
       <ActivityIndicator size='large' color= '#06d1f4'/>
       </View>
    )
}

export default Loader;