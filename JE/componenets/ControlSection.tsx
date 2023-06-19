// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   controlSection: {
//     position: 'absolute',
//     top: '20%',
//     left: '2%',
//     right: '2%',
//     bottom: 0,
//     width: '95%',
//     height: '80%',
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlayText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// const ControlSection = () => {
//   return (
//     <View style={styles.controlSection}>
//       <Text style={styles.overlayText}>컨트롤 섹션 부분입니다!</Text>
//     </View>
//   );
// };

// export default ControlSection;

import React, {useRef} from 'react';
import {View, Text, StyleSheet, PanResponder, Animated} from 'react-native';

const styles = StyleSheet.create({
  controlSection: {
    position: 'absolute',
    left: '2%',
    right: '2%',
    width: '96%',
    height: '80%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  overlayText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ControlSection = () => {
  const pan = useRef(new Animated.Value(0)).current;

  // panResponder는 크게 이벤트의 '시작', '진행 중', '끝'으로 구성된다.
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // 제스처 인식을 시작할 때 호출되는 함수, 화면을 터치한 것을 인식함
      onPanResponderMove: (_, gestureState) => {
        // onPanResponderMove: 터치 이벤트가 진행중일 때 호출되는 함수
        const {dy} = gestureState;
        pan.setValue(dy); // 수직 이동 거리를 pan Animated 값에 반영
      },
      onPanResponderRelease: (_, gestureState) => {
        // onPanResponderRelease: 터치 이벤트가 끝났을 때 호출되는 함수(움직이는 동안 계속 호출됨)
        const {dy} = gestureState;
        if (dy > 50) {
          // 아래로 쓸어내렸을 경우 크기를 줄이는 애니메이션 적용
          Animated.spring(pan, {
            toValue: 200, // 변경할 크기 설정
            useNativeDriver: false,
          }).start();
        } else {
          // 원래 크기로 돌아오는 애니메이션 적용
          Animated.timing(pan, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const controlSectionTop = pan.interpolate({
    inputRange: [0, 200], // 크기 변경 범위 설정
    outputRange: ['20%', '80%'], // 크기 변경에 따른 상대적인 상단 위치 설정
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.controlSection, {top: controlSectionTop}]} // ControlSection의 상단 위치 조정
      {...panResponder.panHandlers} // PanResponder 이벤트 핸들러 추가
    >
      <Text style={styles.overlayText}>컨트롤 섹션 부분입니다!!!</Text>
    </Animated.View>
  );
};

export default ControlSection;
