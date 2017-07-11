import { StackNavigator } from 'react-navigation'

// Screens
import HomeScreen from './view/HomeScreen'; 
import CategoryScreen from './view/CategoryScreen'; 
import CategoryDetailScreen from "./view/CategoryDetailScreen"; 

const routeConfiguration = {
  HomeScreen: { screen: HomeScreen },
  CategoryScreen: { screen: CategoryScreen },
  CategoryDetailScreen: { screen: CategoryDetailScreen } 
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'HomeScreen'
}

export const NavigatorTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration) 

