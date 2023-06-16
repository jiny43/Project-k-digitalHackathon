import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppleMap from './componenets/AppleMap';
import FireAlarm from './componenets/FireAlarm';
import ControlSection from './componenets/ControlSection';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  FireAlarmContainer: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <AppleMap />
      <FireAlarm />
      <ControlSection></ControlSection>
    </View>
  );
};

export default App;
