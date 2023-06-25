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
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});

const App = () => {
  return (
    <View style={styles.fireAlarmContainer}>
      <Text style={styles.text}>갤러리아 타임월드 3F(A.P.C)에서 화재가 발생하였습니다.</Text>
    </View>
  );
};

export default App;
