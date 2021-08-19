import React, { Component } from "react";
import { connect } from "react-redux";

import { sendOTP, verifyOTP, changePassword } from "../../actions";
import "./Welcome.css";

class VerifyIdentity extends Component {
  state = {
    email: "",
    otp: "",
    password: "",
    submitted: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { email, otp, password } = this.state;
    if (email && password && otp) {
      this.props.changePassword(email, otp, password);
    }
  };
  render() {
    const { email, otp, password } = this.state;
    const { message, sendOTP, verifyOTP } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <h2 className="title">Change Password</h2>
          <h4>{message}</h4>
          <div style={{ display: "flex" }}>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <input
              onClick={(event) => sendOTP(email)}
              style={{ marginLeft: "5px" }}
              type="button"
              value="Send OTP"
              className="btn solid"
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={otp}
                onChange={this.handleChange}
              />
            </div>
            <input
              onClick={(event) => verifyOTP(email, otp)}
              style={{ marginLeft: "5px" }}
              type="button"
              value="Verify OTP"
              className="btn solid"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete={password}
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Change Password" className="btn solid" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.passwordRecovery.message,
  };
};

export default connect(mapStateToProps, { sendOTP, verifyOTP, changePassword })(
  VerifyIdentity
);
