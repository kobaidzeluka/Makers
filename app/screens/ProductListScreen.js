import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import Card from "../components/Card";
import axiosService from "../config/axiosService";
import Screen from './../components/Screen';

export default class ProductListScreen extends Component {
  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    filtering: false,
    refreshing: false,
    error: null,
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    const { page } = this.state;
    const URL = `/api/products?_page=${page}&_limit=8`;

    axiosService
      .request({
        url: URL,
        method: "GET",
      })
      .then((response) => {
        this.setState(() => ({
          data:
            page === 1
              ? Array.from(response.data)
              : [...this.state.data, ...response.data],
          loading: false,
          loadingMore: false,
          refreshing: false,
        }));
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.getProduct();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        loadingMore: true,
      }),
      () => {
        this.getProduct();
      }
    );
  };

  renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return <ActivityIndicator animating size="large" />;
  };

  render() {
    return !this.state.loading ? (
        <Screen>
        
      <FlatList
        contentContainerStyle={{
          width: "100%",
          backgroundColor:'#fff'
        }}
        // numColumns={1}
        data={this.state.data}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image} seller={item.seller} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={this.renderFooter}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
      </Screen>
    ) : (
      <View>
        <Text style={{ alignSelf: "center" }}>Loading Product</Text>
        <ActivityIndicator />
      </View>
    );
  }
}
