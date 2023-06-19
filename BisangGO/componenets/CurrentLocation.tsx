import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
  leftContainer: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  rightContainer: {
    width: '80%',
    // flexDirection: 'row',
  },
});

const CurrentLocation = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.leftContainer}>
        <Image source={require('../img/Group2.png')} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>현재 내 위치</Text>
        <Text style={styles.text}>갤러리아 타임월드</Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
