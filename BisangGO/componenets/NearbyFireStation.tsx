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

const NearbyFireStation = () => {
  return (
    <View style={styles.fireAlarmContainer}>
      <Text style={styles.text}>대전 둔산 소방서</Text>
      <Text style={styles.text}>가장 가까운 소방서</Text>
    </View>
  );
};

export default NearbyFireStation;
