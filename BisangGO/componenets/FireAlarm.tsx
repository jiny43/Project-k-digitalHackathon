import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    width: '90%',
    height: '20%',
    backgroundColor: 'red',
  },
});

const App = () => {
  return (
    <View>
      <Text style={styles.text}>현재[]에서 화재가 발생하였습니다.</Text>
    </View>
  );
};

export default App;
