import React, { Component } from "react";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Clinics extends Component {
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" />
        <Sidebar active = "Clinics"/>
        <div className="main-content">
          <Header active = "Clinics"/>
          <main>
            <h2>Clinics</h2>
          </main>
        </div>
      </>
    );
  }
}

export default Clinics;
