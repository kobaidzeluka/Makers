//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import AppText from "./AppText";
// create a component
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} color="black" />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    flex: 1,
    alignSelf: "center",
    marginHorizontal: 15,
    fontSize: 18,
  },
});

//make this component available to the app
export default SearchBar;
