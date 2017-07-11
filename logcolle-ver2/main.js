import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GridView from "./src/components/grid_view";
import Category from "./src/components/category";
import { createStore } from "redux";
import reducers from "./src/reducers";
import { Provider } from "react-redux";
import store from "./src/store";
import { TabNavigator, StackNavigator } from "react-navigation";
import TabBarNavigation from "./screens/TabBar/view/TabBarNavigation"; 


class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
