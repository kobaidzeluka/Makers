//import liraries
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "./AppText";

// create a component
const CardReview = ({ body, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.CardReview}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.body}>{body}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  CardReview: {
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 20,
    overflow: "hidden",
    paddingTop:10,
  },
  

body:{
    padding:10,
    color:'red'
}
});

//make this component available to the app
export default CardReview;
