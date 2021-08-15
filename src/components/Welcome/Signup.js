import React, { Component } from "react";
import { connect } from "react-redux";

import { signUp } from "../../actions";
import SocialButtons from "./SocialButtons";
import "./Welcome.css";

class Signup extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
    submitted: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ submitted: true });
    const {user} = this.state;
    if (user.firstName && user.lastName && user.email && user.password && user.age) {
      this.props.signUp(user);
      this.props.changeContainer();
  }
  };

  render() {
    const { user } = this.state;
    const { error } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <h4>{error}</h4>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={user.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={user.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-hourglass-half" />
          <input
            type="number"
            placeholder="Age"
            max="99"
            min="3"
            name="age"
            value={user.age}
            onChange={this.handleChange}
          />
        </div>

        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={user.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            required
            autoComplete={user.password}
            value={user.password}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" className="btn" defaultValue="Sign up" />
        <SocialButtons />
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.userRegistration.message
  }
}

export default connect(mapStateToProps, { signUp })(Signup);
