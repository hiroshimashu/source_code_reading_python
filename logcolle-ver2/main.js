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
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import WholeCategoryScreen from "./screens/WholeCategoryScreen";
import AddLogScreen from "./screens/AddLogScreen";
import CategoryScreen from "./screens/CategoryScreen";
import WebViewScreen from "./screens/WebViewScreen";

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      main: {
       screen: StackNavigator({
         home:{screen: HomeScreen},
         category:{screen: CategoryScreen}
       })
      },
      Log: {
        screen: StackNavigator({
         add:{ screen: AddLogScreen },
         web:{ screen: WebViewScreen }
        })
      },
      Detail: { screen: DetailScreen }
    });

    return (
      <Provider store = {store}>
        <MainNavigator />
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
