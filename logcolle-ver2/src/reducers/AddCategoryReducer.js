import { ENTER_NEW_CATEGORY_NAME } from "../actions/types";
import { ENTER_NEW_COLOR } from "../actions/types";

const INITIAL_STATE = {
  categoryName: "",
  color: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTER_NEW_CATEGORY_NAME:
      return { ...state, categoryName: action.payload};
    case ENTER_NEW_COLOR:
      return { ...state, color: action.payload};
    default:
      return state;
  } 
};
