import { ENTER_NEW_CATEGORY } from "./types";

export const EnterNewCategory = (selectedName,selectedColor) => {
  return {
    type: ENTER_NEW_CATEGORY,
    name: selectedName,
    color: selectedColor
  }
};
