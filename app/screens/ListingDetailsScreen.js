//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "./../components/AppText";
import Screen from "./../components/Screen";
// create a component
const ListingDetailsScreen = ({ route }) => {
  const { title, price, image, description, seller} = route.params;

  return (
    <Screen>
      <ScrollView>
        <View>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.description}>{description}</AppText>
            <AppText style={styles.seller}>Seller: {seller}</AppText>
            <AppText style={styles.price}>{price} $</AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    color: "#EC7430",
  },
  seller: {
fontSize:20,
color:'#000',
marginVertical:5,
  },
  price: {
    color: "#EC7430",
    fontSize: 20,
    marginVertical: 10,
  },
});

//make this component available to the app
export default ListingDetailsScreen;
