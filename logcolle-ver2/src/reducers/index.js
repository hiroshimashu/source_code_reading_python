import { combineReducers } from "redux";
import newCategory from "./AddCategoryReducer";
import newLog from "./AddLogReducer"; 
import viewDetail from "./ViewDetailReducer";
import { TabBar } from "../../screens/TabBar/navigationConfiguration"; 
import home  from "./HomeReducer"; 



export default combineReducers({
  newCategory, 
  newLog, 
  viewDetail, 
  tabBar: (state,action) => TabBar.router.getStateForAction(action,state), 
  home
});
