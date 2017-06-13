import React, { Component } from "react";
import { View, Text } from "react-native";
import CategoryList from "../src/components/category_list"; 

class CategoryScreen extends Component {
  static navigationOptions = {
    title: "カテゴリー"
  };

　render() {
   return(
     <CategoryList />
   )
  }

}

export default CategoryScreen;
