import { TabNavigator } from 'react-navigation'; 
import HomeTabNavigation  from "../HomeTab/view/HomeNavigation"; 
import AddLogScreen from "../LogTab/AddLogScreen"; 
import DetailScreen from "../DetailTab/DetailScreen"; 

const routeConfiguration = {
  Home: { screen: HomeTabNavigation },
  Log: { screen: AddLogScreen },
  Detail: { screen: DetailScreen },
}

const tabBarConfiguration = {
  //...other configs
	tabBarOptions:{
	    // tint color is passed to text and icons (if enabled) on the tab bar
	    activeTintColor: 'white',
	    inactiveTintColor: 'blue'
	}
}  

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration);  
