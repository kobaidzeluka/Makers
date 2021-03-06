import React, { Component } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./../screens/HomeScreen";
import ListingDetailsScreen from "./../screens/ListingDetailsScreen";
const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default FeedNavigator;
