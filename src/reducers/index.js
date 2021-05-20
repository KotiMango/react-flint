import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
//combineReducers set as index can be called without specfiying index
const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
