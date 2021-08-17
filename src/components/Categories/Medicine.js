import React, { Component } from "react";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Medicine extends Component {
  render() {
    return (
      <>
      <input type="checkbox" id="nav-toggle" />
        <Sidebar active = "Medicine" />
        <div className="main-content">
          <Header active = "Medicine"/>
          <main><h2>Medicine</h2></main>
        </div>
      </>
    );
  }
}

export default Medicine;