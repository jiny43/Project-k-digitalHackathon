import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SobangchaToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isToggled && styles.buttonToggled]}
        onPress={handleToggle}
      >
        <Text style={styles.buttonText}>
          {isToggled ? '대기 중' : '출동 중'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 90,
    height: 40,
    backgroundColor: '#FA2424',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonToggled: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight : "bold"
  },
});

export default SobangchaToggle;
