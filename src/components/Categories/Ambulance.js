import React, { Component } from "react";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Ambulance extends Component {
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" />
        <Sidebar active = "Ambulance"/>
        <div className="main-content">
          <Header active = "Ambulance"/>
          <main>
            <h2>Ambulance</h2>
          </main>
        </div>
      </>
    );
  }
}

export default Ambulance;
