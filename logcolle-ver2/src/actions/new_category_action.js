import { ENTER_NEW_CATEGORY_NAME } from "./types";

export const EnterNewCategoryName = (text) => {
  return {
    type: ENTER_NEW_CATEGORY_NAME,
    payload: text
  }
}; 
