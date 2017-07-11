import { NEW_LOG } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case NEW_LOG: 
        const { title, category, date, comment } = action; 
        return [...state, {logcategory: category, post:{logtitle: title, logdate: date, logcomment: comment}}]  
    default:
        return state;
  }  
};
