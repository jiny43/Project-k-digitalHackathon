import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const CurrentLocation = () => {
  return (
    <View style={styles.fireAlarmContainer}>
      <Text style={styles.text}>현재 내 위치</Text>
      <Text style={styles.text}>대전 서구 갤러리아 백화점</Text>
    </View>
  );
};

export default CurrentLocation;
