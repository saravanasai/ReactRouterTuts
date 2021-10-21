import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectRoute";
import Login from "./components/Login";
import Balance from "./components/balance";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} /> 
      </Switch>
      <ProtectedRoute exact path="/"  component={App}   />
      <ProtectedRoute exact path="/balance"  component={Balance}   />
    </Router>
  </Provider>,
  document.getElementById("root")
);
