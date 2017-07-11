import { VIEW_DETAIL } from "../actions/types";
export default (state = [], action) => {
  switch (action.type) {
    case VIEW_DETAIL:
      return action.dispatched
    default:
      return state;
  }
}; 
