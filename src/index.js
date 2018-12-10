import "bootstrap";
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
