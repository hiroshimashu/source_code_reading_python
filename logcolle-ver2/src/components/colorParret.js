import React, { Component } from "react";
import { View, Animated, PanResponder, Text, ListView } from "react-native";
import { Button } from "react-native-elements";

class ColorParret extends Component {
  render() {
    return(
      <View style = {{backgroundColor: "white", flex: 0.3}}>
        <Text>
         "色を入力"
        </Text>
        <Button
          icon = {{type: "material-community",
                   size: 18,
                   color: "red",
                   name: "square"
                 }}
        />  

      </View>
    )
  }
}

export default ColorParret;
