import { VIEW_DETAIL } from "./types";

export const ViewDetail = (category) => {
  return { 
    type: VIEW_DETAIL, 
    dispatched: category
  }
};