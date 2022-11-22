import { combineReducers } from "redux";
import loginRed from "./loginRed";
import userRed from "./userRed";
import regisRed from "./regisRed";

const allRed = combineReducers({
  loginred: loginRed,
  userred: userRed,
  regisred: regisRed,
});

export default allRed;
