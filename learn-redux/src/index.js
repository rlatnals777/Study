import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux"; // store는 리듀서 파라미터를 넣어야댐
import rootReducer from "./modules"; // 리듀서
import { composeWithDevTools } from "redux-devtools-extension";

//store 만들기
const store = createStore(rootReducer, composeWithDevTools());

//어디서든지 store를 사용할 수 있음
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
