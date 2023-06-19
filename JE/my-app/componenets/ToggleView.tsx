import React from 'react';
import {View} from 'react-native';

import SOSBox from './SOSBox';
import SobangchaBox from './SobangchaBox';

export default function ToggleView() {
  return (
    <View>
      <SOSBox></SOSBox>
      <SobangchaBox></SobangchaBox>
    </View>
  );
}
