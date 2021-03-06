//import liraries
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

// create a component
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Loading;
