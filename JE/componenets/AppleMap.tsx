import React from 'react';
import Styled from 'styled-components/native';
import MapView from 'react-native-maps';

const Container = Styled.View`
  flex: 1;
`;

const AppleMap = () => {
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 36.351868,
          longitude: 127.382932,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard" // 실내지도 정보를 표시
      />
    </Container>
  );
};

export default AppleMap;
