import { ENTER_NEW_CATEGORY_NAME } from "./types";
import { ENTER_NEW_COLOR } from "./types";

export const EnterNewCategoryName = (text) => {
  return {
    type: ENTER_NEW_CATEGORY_NAME,
    payload: text
  }
};

export const EnterNewColor = (color) => {
  return {
    type: ENTER_NEW_COLOR,
    payload: color
  }
};
