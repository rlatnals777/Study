//2개의 리듀서(counter.js, todos.js안에 있는 리듀서) 합치기
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
