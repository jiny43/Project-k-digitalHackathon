import React, { useState } from "react";
import { MapView, StyleSheet, View } from "react-native";

const App = () => {
  const [center, setCenter] = useState({
    lat: 37.566336,
    lng: 126.977868,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        center={center}
        zoomLevel={15}
        onRegionChange={(region) => setCenter(region)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default App;