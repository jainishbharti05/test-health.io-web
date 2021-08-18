import React, { Component } from "react";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Police extends Component {
  render() {
    return (
      <>
      <input type="checkbox" id="nav-toggle" />
        <Sidebar active = "Police" />
        <div className="main-content">
          <Header active = "Police"/>
          <main><h2>Police</h2></main>
        </div>
      </>
    );
  }
}

export default Police;