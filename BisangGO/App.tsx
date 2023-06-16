import React from 'react';
import {View, StyleSheet} from 'react-native';
// import AppleMap from './componenets/AppleMap';
import FireAlarm from './componenets/FireAlarm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});


const App = () => {
  return (
    <View style={styles.container}>
      {/* <AppleMap /> */}
      <FireAlarm />
    </View>
  );
};

export default App;
