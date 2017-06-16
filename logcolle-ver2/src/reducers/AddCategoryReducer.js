import { ENTER_NEW_CATEGORY } from "../actions/types";


export default (state = [], action) => {
  switch (action.type) {
    case ENTER_NEW_CATEGORY:
      return [ ...state, {name: action.name, color:action.color, numTitle: "0"}];
    default:
      return state;
  }
};
