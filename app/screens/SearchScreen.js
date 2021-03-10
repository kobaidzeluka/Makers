//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import SearchBar from "../components/SearchBar";
import Screen from "./../components/Screen";
import Card from "./../components/Card";
const url =
  "https://us-central1-js04-b4877.cloudfunctions.net/api/products?q=intel";
// create a component
const SearchScreen = () => {
  const [result, setResult] = useState([]);
  const [term, setTerm] = useState("");

  const getResult = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setResult(result);
      //   console.log(result)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={getResult} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.slice(0, 10)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.price}
            seller={item.seller}
            description={item.description}
          />
        )}
      />
    </Screen>
  );
};

//make this component available to the app
export default SearchScreen;
