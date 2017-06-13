import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

class AddLogScreen extends Component {
  static navigationOptions = {
    title: "ログ追加",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name = "add" size = {30} color = {tintColor} />;
      }
  }

  render() {
    return(
      <View>
        <Text>AddLogScreen</Text>
      </View>
    );
  }
}

export default AddLogScreen;
