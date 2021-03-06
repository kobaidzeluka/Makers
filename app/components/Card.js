//import liraries
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "./AppText";

// create a component
const Card = ({ image, subTitle, title, seller, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}$</AppText>
          <AppText style={styles.seller}>Seller: {seller}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 20,
    overflow: "hidden",
    paddingTop:10,
  },
  title: {
    marginBottom: 7,
    fontSize: 18,
    color: "#333637",
  },

  subTitle: {
    color: "#EC7430",
    fontSize: 20,
    marginBottom: 5,
  },

  seller: {
    fontSize: 17,
    color: "#333637",
  },
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },
});

//make this component available to the app
export default Card;
