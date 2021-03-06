//import liraries
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from "./../components/Card";
import Loading from "../components/Loading";
import Screen from './../components/Screen';

const url = "https://us-central1-js04-b4877.cloudfunctions.net/api/products";

// create a component
const ProductScreen = () => {
    const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false)
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
        data={products}
        keyExtractor = { (item, index) => index.toString() }
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.price}
            seller={item.seller}
            description={item.description}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
      />
      </Screen>
  );
    
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        backgroundColor: '#f8f4f4',
    },
});

//make this component available to the app
export default ProductScreen;
