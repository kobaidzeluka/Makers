//import liraries
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";
import Screen from "./Screen";
// create a component
const Card = ({ image, subTitle, title, seller, onPress }) => {
  return (
    <Screen>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}$</AppText>
            <AppText style={styles.seller}>Seller: {seller}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#EC7430",
    marginBottom: 20,
    marginHorizontal: 15,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    marginBottom: 7,
    fontSize: 18,
    color: "#333637",
  },

  subTitle: {
    color: '#333637',
    fontSize: 20,
    marginBottom: 5,
  },

  seller: {
    fontSize: 17,
    color: "#333637",
  },
  image: {
    width: "90%",
    height: 300,
    alignSelf:'center'
  },

  detailsContainer: {
    padding: 20,
  },
});

//make this component available to the app
export default Card;
