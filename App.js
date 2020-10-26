import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import styles from './Styles';

export default function App() {
  const [pressing, setPressing] = useState(false);
  function _onPressIn() {
    setPressing(true)
  }
  function _onPressOut() {
    setPressing(false)
  }

  return (
    <View style={styles.parent}>
        <Text style={styles.child}> Child One </Text>
        <Text style={styles.child}> Child Two </Text>
        <Text style={styles.child}> Child Three </Text>
    </View>
  );
}

