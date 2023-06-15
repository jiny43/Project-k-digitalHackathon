import React from 'react';
import Styled from 'styled-components/native';
import MapView from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const AppleMap = () => {
  return (
    <Container>
      <MapView style={{flex: 1}} />
    </Container>
  );
};

export default AppleMap;
