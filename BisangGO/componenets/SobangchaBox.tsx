import React from "react";
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import SobangchaToggle from "./sobangchaToggle";

export default function SobangchaBox() {

  return (

    <View style={styles.container}>
      <View style={styles.box}>
        {/* 도착 시간+시간 bar */}
        <View
          style={{ alignItems: "center" }}>
          <View style={styles.timerFont}>
            <Image source={require('../img/infoCircle.png')}></Image>
            <Text style={styles.timer}>예상 도착 시간 : 15분</Text>
          </View>
          <Image source={require('../img/timerBar.png')}></Image>
        </View>
        {/* 소방차 이미지 */}
        <Image source={require('../img/fire-truck.png')}></Image>
        <SobangchaToggle />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",

  },
  box: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around",
    width: "90%",
    padding: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginTop: 5,
  },
  timer: {
    fontWeight: "bold",
    fontSize : 12,
    marginBottom: 5,
  },
  timerFont: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    paddingRight: 5,
  }

})