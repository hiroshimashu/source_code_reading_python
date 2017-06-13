import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

class DetailScreen extends Component {
  static navigationOptions = {
    title: "設定",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name = "settings" size = {30} color = {tintColor} />;
      }
  }

  render() {
    return(
      <View>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}

export default DetailScreen;
