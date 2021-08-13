import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from '../history';

import Welcome from "./Welcome/Welcome";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          
        </Switch>
      </Router>
    );
  }
}

export default App;
