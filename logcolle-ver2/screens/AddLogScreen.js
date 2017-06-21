import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import AddLog from "../src/components/addlog";

class AddLogScreen extends Component {
  static navigationOptions = {
    title: "ログ追加",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name = "add" size = {30} color = {tintColor} />;
      }
  }

  onWeb = () => {
    this.props.navigation.navigate("web")
  }

  render() {
    return(
      <AddLog onWeb = { this.onWeb }/>
    );
  }
}

export default AddLogScreen;
