import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Login from "../Login";
import Header from "../Header";
import Signup from "../Signup";
import Home from "../Home";

import store from "../../Store/";

// background
import Particles from "./Particles";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
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
      </div>
    </Router>
  </Provider>
);

export default App;
