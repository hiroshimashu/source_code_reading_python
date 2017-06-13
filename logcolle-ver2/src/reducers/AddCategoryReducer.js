import { ENTER_NEW_CATEGORY_NAME } from "../actions/types";

const INITIAL_STATE = {
  categoryName: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTER_NEW_CATEGORY_NAME:
      return { ...state, categoryName: action.payload};
    default:
      return state;
  }
};
