import React, { Component } from "react";
import { Header }  from "../src/common/Header";
import { Icon } from "react-native-elements";

class WholeCategoryScreen extends Component {
  static navigationOptions = {
    title: "カテゴリ一覧",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name = "library-books" size = {30} color = {tintColor} />
      }
  }

  render() {
     return (
       <Header headerText = "カテゴリ" />
     );
  }
}

export default WholeCategoryScreen;
