import { NavigatorTab } from "../../screens/HomeTab/navigationConfiguration"; 

export default (state, action) => { 
  return NavigatorTab.router.getStateForAction(action,state)
}