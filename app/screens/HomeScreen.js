//import liraries
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "./../components/Card";
import Loading from "../components/Loading";
import Screen from "./../components/Screen";

const url =
  "https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc";

// create a component
const HomeScreen = ({ navigation }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const products = await response.json();
      setLoading(false);
      setProduct(products);
      //   console.log(products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Screen style={styles.container}>
      <FlatList
        refreshing={refreshing}
        onRefresh={getProduct}
        showsVerticalScrollIndicator={false}
        data={products.slice(0, 10)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.price}
            seller={item.seller}
            description={item.description}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: "#f8f4f4",
  },
});

//make this component available to the app
export default HomeScreen;
