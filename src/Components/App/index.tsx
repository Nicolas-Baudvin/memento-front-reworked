import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import Login from "../Login";
import Header from "../Header";
import Signup from "../Signup";
import Home from "../Home";

// background
import Particles from "./Particles";
import Popup from "../Popup";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/reducer";
import Dashboard from "../Dashboard";

const App = () => {
  const { token } = useSelector((state: RootState) => state.user);
  return (
    <Router>
      <div className="App">
        <Particles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/connexion">
            {token ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route exact path="/inscription">
            {token ? <Redirect to="/dashboard" /> : <Signup />}
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Popup />
      </div>
    </Router>
  );
};

export default App;
