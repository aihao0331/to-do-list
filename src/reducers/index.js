import { combineReducers } from "redux";
import users from "./users.js";
import redirect from "./redirect.js";

const reducers = combineReducers({
  users,
  redirect
});

export default reducers;