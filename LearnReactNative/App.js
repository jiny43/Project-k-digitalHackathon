import React from "react";
import { SafeAreaView,View,Text } from "react-native";
import Map from './components/Map';

const App = () => {
  return(
    // <SafeAreaView/> -> iPhoneX 이상 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지
    // <View/> -> 가장 기본적인 컴포넌트로 레이아웃 및 스타일 담당
    // <Text/> -> 텍스트를 보여주는 역할
    <SafeAreaView>
    <View>
    <Text>Hello React!!</Text>
    <Map/>
    </View>
    </SafeAreaView>
    ); 
};

export default App;