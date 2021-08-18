import React, { Component } from "react";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Hospitals extends Component {
  render() {
    return (
      <>
      <input type="checkbox" id="nav-toggle" />
        <Sidebar active = "Hospitals" />
        <div className="main-content">
          <Header active = "Hospitals"/>
          <main><h2>Hospitals</h2></main>
        </div>
      </>
    );
  }
}

export default Hospitals;