import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import { signOut } from "../../actions/index";
import "./Home.css";
import Log from "../../images/log.svg"

class Header extends Component {
  
  render() {
    const { email , signOut, active } = this.props;
    return (
      
        <header> 
          <h2 id="sectionNames">
            <label htmlFor="nav-toggle">
              <span className="las la-bars" />
            </label>
            {active}
          </h2>
          <div className="search-wrapper">
            <span className="las la-search" />
            <input type="search" placeholder="Search here" />
          </div>
          <div className="user-wrapper">
            <img src={Log} alt="" width="40px" height="40px" />
            <div>
              <h4>{email}</h4>
              <small>
                {" "}
                <p style={{cursor : "pointer"}} onClick={signOut}>Log Out</p>
              </small>
            </div>
          </div>
        </header>
      
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email : (state.authentication.loggedIn === true ? state.authentication.user.email : "User")
  }
}

export default connect( mapStateToProps, { signOut })(Header);
