// App.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyMap from './NaverMap';

const App = () => {
  return (
    <View style={styles.container}>
      <MyMap/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
