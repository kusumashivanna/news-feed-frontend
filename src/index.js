import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App.js";
import NewsFeedReducer from "./reducer/newsFeedReducer.js";

const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(NewsFeedReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
