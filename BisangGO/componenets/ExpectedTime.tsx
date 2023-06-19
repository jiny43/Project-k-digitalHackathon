import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const styles = StyleSheet.create({
  fireAlarmContainer: {
    width: '90%',
    height: '10%',
    position: 'absolute',
    top: 20,
    left: 20,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

const ExpectedTime = () => {
  return (
    <View style={styles.fireAlarmContainer}>
      <Image source={require('../img/Group2.png')} />
      <Text style={styles.text}>예상 출동 시간</Text>
      <Text style={styles.text}>5min</Text>
    </View>
  );
};

export default ExpectedTime;
