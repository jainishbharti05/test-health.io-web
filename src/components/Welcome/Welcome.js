import React, { Component } from "react";
import SignUp from "./Signup";
import SignIn from "./Signin";
import "./Welcome.css";
import Log from "../../images/log.svg";
import Register from "../../images/register.svg";

class Welcome extends Component {
  state = {
    containerClass: null,
    url: ""
  };
 

  handleRegisterClick = (event) => {
    event.preventDefault();
    this.setState({ containerClass: "sign-up-mode" });
  };

  handleSigninClick = (event) => {
    event.preventDefault();
    this.setState({ containerClass: "sign-in-mode" });
  };



  render() {
    return (
      <div className={`container ${this.state.containerClass}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <SignIn />
            <SignUp changeContainer = { () => { this.setState({ containerClass: "sign-in-mode" }) }} />
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Health.io</h3>
              <p>
                We're here to help you take care of anything and everything with
                ease.
              </p>
              <button
                className="btn transparent"
                onClick={this.handleRegisterClick}
              >
                Sign up
              </button>
            </div>
            <img src={Log} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Health.io</h3>
              <p>
                We're here to help you take care of anything and everything with
                ease.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={this.handleSigninClick}
              >
                Sign in
              </button>
            </div>
            <img src={Register} className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
