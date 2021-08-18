import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from '../history';
import Dashboard from "../components/Categories/Dashboard";
import Ambulance from "../components/Categories/Ambulance";
import Clinics from "../components/Categories/Clinics";
import Hospitals from "../components/Categories/Hospitals";
import Laboratory from "../components/Categories/Laboratory";
import Medicine from "../components/Categories/Medicine";
import Police from "../components/Categories/Police";
import { PrivateRoute } from "./Private/PrivateRoute";
import Welcome from "./Welcome/Welcome";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/ambulance" component={Ambulance} />
          <PrivateRoute path="/clinics" component={Clinics} />
          <PrivateRoute path="/hospitals" component={Hospitals} />
          <PrivateRoute path="/laboratory" component={Laboratory} />
          <PrivateRoute path="/medicine" component={Medicine} />
          <PrivateRoute path="/police" component={Police} />
        </Switch>
      </Router>
    );
  }
}

export default App;
