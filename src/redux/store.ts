import { createStore } from "redux";
import userReducer from "./reducers";
import { combineReducers } from "redux";

const store = createStore(userReducer);

export default store;
