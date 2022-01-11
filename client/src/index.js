import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

// IMPORT COMBINE-REDUCERS FROM 'REDUX'
// CONST ALL-REDUCERS = COMBINE-REDUCERS ({
//        SOME FORM OF REDUCER
// })

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker();
