//import liraries
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

// create a component
const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

// define your styles
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

//make this component available to the app
export default AppText;
