import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppleMap from './componenets/AppleMap';
import ControlSection from './componenets/ControlSection';
import Prac from './TestComponents/PanresponderPrac';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AppleMap /> */}
      {/* 지도 위에서 조작이 가능한 Control Section 컨테이너 */}
      {/* <ControlSection /> */}
      <Prac />
    </View>
  );
};

export default App;
