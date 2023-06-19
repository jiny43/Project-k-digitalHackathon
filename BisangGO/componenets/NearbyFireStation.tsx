import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { Image } from 'react-native';


const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
  leftContainer: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  rightContainer: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'row',
  },
});
const NearbyFireStation = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Image source={require('../img/image1.png')} />
      </View>
      <View>
        <Text style={styles.text}>대전 둔산 소방서</Text>
        <Text style={styles.text}>가장 가까운 소방서</Text>
      </View>
      <View>
        <Image source={require('../img/Group.png')} />
      </View>
    </View>
  );
};

export default NearbyFireStation;
