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
    height: '80%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ControlSection = () => {
  return (
    <View style={styles.controlSection}>
      <Text style={styles.overlayText}>컨트롤 섹션 부분입니다!</Text>
    </View>
  );
};

export default ControlSection;
