import React, { Component } from "react";
import { connect } from 'react-redux';

import { signIn } from '../../actions';
import SocialButtons from "./SocialButtons";
import "./Welcome.css";

class Signin extends Component {
  state = {
    email: "",
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
    const { email, password } = this.state;
    if (email && password) {
      this.props.signIn(email, password);
    }
  };

  render() {
    const { email , password } = this.state;
    const { error } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <h4>{error}</h4>
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
        <input type="submit" defaultValue="Login" className="btn solid" />
        <SocialButtons />
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.authentication.message
  }
}

export default connect(mapStateToProps, { signIn })(Signin);
