import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SearchRouteSection: {
    width: '50%',
    height: '100%',
    backgroundColor: '#E5FC98',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

const SearchRoute = () => {
  return (
    <View style={styles.SearchRouteSection}>
      <Text style={styles.textStyle}>경로 탐색</Text>
    </View>
  );
};

export default SearchRoute;
