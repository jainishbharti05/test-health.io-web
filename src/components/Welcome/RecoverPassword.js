import React, { Component } from 'react';

class RecoverPassword extends Component {
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
        const { email, password } = this.state;
        if (email && password) {
          this.props.signIn(email, password);
        }
      };
      render() {
        const { email, otp } = this.state;
        const { error } = this.props;
        return (
          <div>
            <form onSubmit={this.handleSubmit} className="sign-in-form">
              <h2 className="title">Change Password</h2>
              <h4>{error}</h4>
                <div style={{ display: "flex"}}>
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
              <input style={{marginLeft: "5px"}} type="submit" value="Send OTP" className="btn solid" />
                </div>
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
              <input type="submit" defaultValue="Submit" className="btn solid" />
            </form>
          </div>
        );
      }
    }


export default RecoverPassword;