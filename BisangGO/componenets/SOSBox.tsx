import React, { useState } from 'react';
import { View, Text, Image, Switch, StyleSheet } from 'react-native';

const SOSToggleBox = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (value) => {
    setIsToggled(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={require('../img/siren.png')}
        />
        <Text
          style={styles.sosStyle}
        >S.O.S 요청</Text>

        {/* Switch 컴포넌트 스타일링 불가입니다,, */}
        <Switch
          value={isToggled}
          onValueChange={handleToggle}
          thumbColor={isToggled ? 'red' : '#374563'}
          trackColor={{ false: '#FFFFFF', true: '#FFC0C0' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  //컨테이너 정렬
  container: {
    flexDirection: 'row',
  },
  //회색 박스
  box: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around",
    width: "90%",
    padding: 10,
    backgroundColor: "#9BA4B4",
    borderRadius: 10,
  },
  // 구조요청 스타일링
  sosStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },

});

export default SOSToggleBox;
