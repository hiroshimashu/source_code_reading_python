import React, { Component } from "react";
import { View, Animated, PanResponder, Text, ListView, Modal, TouchableHighlight } from "react-native";
import { Button, Card } from "react-native-elements";

class ColorParret extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return(
      <Card containerStyle = {{zIndex:2,
                               position: "absolute"
                             }}
      >
        <Text>カテゴリに使う色</Text>
        <View style = {{flexDirection: "row"}}>
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#d11141"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#00b159"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#00aedb"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#f37735"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#ffc425"
          />
        </View>

        <View style = {{flexDirection: "row"}}>
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#e1f7d5"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#ffbdbd"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#c9c9ff"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#f1cbff"
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#7bc043"
          />
        </View>
     </Card>
    );
  }
}

export default ColorParret;
