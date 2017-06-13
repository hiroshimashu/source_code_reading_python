import React, { Component } from "react";
import { View, Animated, PanResponder, Text, ListView } from "react-native";
import { SearchBar, Button, Card, List, } from "react-native-elements";
import { Dimensions } from "react-native";
import CategoryList from "./category_list";


class Category extends Component {
  render() {
    return (
      <View style = {{ flex: 1 }}>
        <Text style = {styles.titleStyle}>
          カテゴリ
        </Text>
        <CategoryList />
      </View>
    )
  }
}

const styles = {
  titleStyle:{
    marginTop: 50,
    marginLeft: 20,
    fontSize: 28,
    fontWeight: "bold"
  }
}

export default Category;
