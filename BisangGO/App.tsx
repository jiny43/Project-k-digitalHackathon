import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppleMap from './componenets/AppleMap';
<<<<<<< HEAD
import FireAlarm from './componenets/FireAlarm';
=======
>>>>>>> heeeun1207/issue18
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
<<<<<<< HEAD
      <FireAlarm />
      <ControlSection></ControlSection>
=======
      {/* 지도 위에서 조작이 가능한 Control Section 컨테이너 */}
      <ControlSection />
>>>>>>> heeeun1207/issue18
    </View>
  );
};

export default App;
