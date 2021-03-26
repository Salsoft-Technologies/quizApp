import React, {useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import styles from './styles';

function Loader() {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size="large" color="#06d1f4" />
    </View>
  );
}

export default Loader;
