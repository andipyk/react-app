import { combineReducers } from "redux";
import counterReducer from "./count";
import loggedReducer from "./isLogged";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducer;
