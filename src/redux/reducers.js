import { combineReducers } from "redux";
import HomeReducer from "../Home/redux/reducer";
import LoginReducer from "../Home/redux/reducer";

const rootReducer = combineReducers({
  HomeReducer,
  LoginReducer
});

export default rootReducer;
