import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";
const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    
    </Provider>
  </React.StrictMode>
);
