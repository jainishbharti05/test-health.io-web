import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import favicon from "../../images/favicon.png";

class Sidebar extends Component {

  state = {
    activeState : this.props.active
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-brand">
          {/* <span className="lab la-accusoft" /> */}
          <span>
            <img src={favicon} alt="" height="30px" width="30px" />
          </span>
          <h2>
            <span>
              <Link id="brandName" to="/dashboard">
                Health.io
              </Link>
            </span>
          </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link id="Dashboard" to="/dashboard" className={'a ' + (this.state.activeState === "Dashboard" ? "active" : "") }>
                <span className="las la-igloo" />
                {/*adding class=active means it on it*/}
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link id="Hospitals" to="/hospitals" className={'a ' + (this.state.activeState === "Hospitals" ? "active" : "") }>
                <span className="las la-users" />
                <span>Hospitals</span>
              </Link>
            </li>
            <li>
              <Link id="Clinics" to="/clinics" className={'a ' + (this.state.activeState === "Clinics" ? "active" : "") }>
                <span className="las la-clipboard-list" />
                <span>Clinics</span>
              </Link>
            </li>
            <li>
              <Link id="Laboratory" to="/laboratory" className={'a ' + (this.state.activeState === "Laboratory" ? "active" : "") }>
                <span className="las la-clipboard-list" />
                <span>Laboratory</span>
              </Link>
            </li>
            <li>
              <Link id="Medicine" to="/medicine" className={'a ' + (this.state.activeState === "Medicine" ? "active" : "") }>
                <span className="las la-receipt" />
                <span>Medicine Outlet</span>
              </Link>
            </li>
            <li>
              <Link id="Ambulance" to="/ambulance" className={'a ' + (this.state.activeState === "Ambulance" ? "active" : "") }>
                <span className="las la-user-circle" />
                <span>Ambulance</span>
              </Link>
            </li>
            <li>
              <Link id="Police" to="/police" className={'a ' + (this.state.activeState === "Police" ? "active" : "") }>
                <span className="las la-clipboard-list" />
                <span>Police</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
