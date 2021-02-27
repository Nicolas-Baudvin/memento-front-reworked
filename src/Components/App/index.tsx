import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Login from "../Login";
import Header from "../Header";
import Signup from "../Signup";
import Home from "../Home";

// background
import Particles from "./Particles";
import Error from "../Error";

const App = () => {
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
            <Login />
          </Route>
          <Route exact path="/inscription">
            <Signup />
          </Route>
        </Switch>
        <Error />
      </div>
    </Router>
  );
};

export default App;
