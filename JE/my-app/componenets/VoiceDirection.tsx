import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  VoiceDirectionSection: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FFFB80',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 70,
    marginLeft: 10,
  },
});

const VoiceDirection = () => {
  return (
    <View style={styles.VoiceDirectionSection}>
      <Text style={styles.textStyle}>음성 길안내</Text>
    </View>
  );
};

export default VoiceDirection;
