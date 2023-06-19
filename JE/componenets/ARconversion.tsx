import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ARconversionSection: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E3D8FF',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

const ARconversion = () => {
  return (
    <View style={styles.ARconversionSection}>
      <Text style={styles.textStyle}>AR 전환</Text>
    </View>
  );
};

export default ARconversion;
