import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppleMap from './componenets/AppleMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <AppleMap />
    </View>
  );
};

export default App;
