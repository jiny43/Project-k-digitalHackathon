import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppleMap from './componenets/AppleMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

const App = () => {
  return (
    <View style={styles.container}>
      <AppleMap />
      {/* 지도 위에서 조작이 가능한 Control Section 컨테이너 */}
      <View style={styles.controlSection}>
        <Text style={styles.overlayText}>컨트롤섹션 부분</Text>
      </View>
    </View>
  );
};

export default App;
