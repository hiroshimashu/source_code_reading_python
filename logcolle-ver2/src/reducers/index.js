import { combineReducers } from "redux";
import newCategory from "./AddCategoryReducer";
import newColor from "./AddCategoryReducer";

export default combineReducers({
  newCategory,
  newColor
}); 
