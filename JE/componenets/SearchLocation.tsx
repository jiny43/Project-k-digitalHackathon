import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SearchLocationSection: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FFCAE2',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

const SearchLocation = () => {
  return (
    <View style={styles.SearchLocationSection}>
      <Text style={styles.textStyle}>위치 검색</Text>
    </View>
  );
};

export default SearchLocation;
