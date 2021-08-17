import React, { Component } from "react";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Laboratory extends Component {
  render() {
    return (
      <>
      <input type="checkbox" id="nav-toggle" />
        <Sidebar active = "Laboratory" />
        <div className="main-content">
          <Header active = "Laboratory"/>
          <main><h2>Laboratory</h2></main>
        </div>
      </>
    );
  }
}

export default Laboratory;