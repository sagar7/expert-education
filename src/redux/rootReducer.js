import { combineReducers } from "redux";
import jokeReducer from "./jokes/jokeReducer";

export default combineReducers({ Joke: jokeReducer });

