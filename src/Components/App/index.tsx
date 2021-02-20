import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "../Login";
import Header from "../Header";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/connexion">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
