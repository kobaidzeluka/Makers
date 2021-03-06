import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../screens/HomeScreen";
import ProductListScreen from "./../screens/ProductListScreen";
import ProductScreen from "./../screens/ProductScreen";
import SearchScreen from "./../screens/SearchScreen";
import { AntDesign } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{ showLabel: false }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
      name="Feed"
      component={FeedNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="bars" color={color} size={size} />
        ),
      }}
      name="ProductList"
      component={ProductListScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="tagso" color={color} size={size} />
        ),
      }}
      name="Product"
      component={ProductScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search1" size={size} color={color} />
        ),
      }}
      name="Search"
      component={SearchScreen}
    />
  </Tab.Navigator>
);

export default AppNavigator;
