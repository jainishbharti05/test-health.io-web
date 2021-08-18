import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import "../Home/Home.css";

class Dashboard extends Component {
  fetchDashboardCards() {
    return (
      <div className="cards">
        <div className="card-single">
          <div>
            <h1>
              <Link className="navigate" to="/hospitals">
                100+
              </Link>
            </h1>
            <span>Hospitals</span>
          </div>
          <div>
            <span className="las la-users" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>
              {" "}
              <Link className="navigate" to="/clinics">
                100+
              </Link>{" "}
            </h1>
            <span>Clinics</span>
          </div>
          <div>
            <span className="las la-clipboard-list" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>
              <Link className="navigate" to="/laboratory">
                50+
              </Link>
            </h1>
            <span>Laboratory</span>
          </div>
          <div>
            <span className="las la-clipboard-list" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>
              <Link className="navigate" to="/medicine">
                50+
              </Link>
            </h1>
            <span>Medicine Outlet</span>
          </div>
          <div>
            <span className="las la-shopping-bag" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>
              <Link className="navigate" to="/ambulance">
                50+
              </Link>
            </h1>
            <span>Ambulance</span>
          </div>
          <div>
            <span className="las la-shopping-bag" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>
              <Link
                className="navigate"
                style={{ color: "white" }}
                to="/police"
              >
                24/7
              </Link>
            </h1>
            <span>Police</span>
          </div>
          <div>
            <span className="lab la-google-wallet" />
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" />
        <Sidebar active="Dashboard" />
        <div className="main-content">
          <Header active="Dashboard" />
          <main>{this.fetchDashboardCards()}</main>
        </div>
      </>
    );
  }
}

export default Dashboard;
