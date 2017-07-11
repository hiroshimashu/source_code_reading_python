import { NEW_LOG } from "./types";

export const NewLog = (title, category, date, comment) => {
  return {
    type: NEW_LOG,
    title: title,
    category: category,
    date: date, 
    comment: comment
  }
};