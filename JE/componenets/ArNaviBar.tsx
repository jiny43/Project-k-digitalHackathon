import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  controlSection: {
    position: 'absolute',
    top: '20%',
    left: '2%',
    right: '2%',
    bottom: 0,
    width: '95%',
    height: '20%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ArNaviBar = () => {
  return (
    <View style={styles.controlSection}>
      <Text style={styles.overlayText}>ar네비 바 부분입니다.</Text>
    </View>
  );
};

export default ArNaviBar;
