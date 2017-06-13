import React, { Component } from "react";
import { View, Text, Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import GridView from "../src/components/grid_view";
import CategoryScreen from "./CategoryScreen";
import { SearchBar, Button, Card} from "react-native-elements";




class HomeScreen extends Component {
  static navigationOptions = {
    title: "ホーム",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name = "home" size = {30} color = {tintColor} />
      }
  };

  onAdd = () => {
    this.props.navigation.navigate("category")
  }

  render() {
    const { width, height, scale } = Dimensions.get("window");

    return (
     <GridView onAdd = { this.onAdd } />
    )
 }
}

 



export default HomeScreen;
