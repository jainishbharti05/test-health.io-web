import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const SocialButtons = () => {
  return (
    <>
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <Link to="#" className="social-icon">
          <i className="fab fa-facebook-f" />
        </Link>
        <Link to="#" className="social-icon">
          <i className="fab fa-twitter" />
        </Link>
        <Link to="#" className="social-icon">
          <i className="fab fa-google" />
        </Link>
        <Link to="#" className="social-icon">
          <i className="fab fa-linkedin-in" />
        </Link>
      </div>
    </>
  );
};

export default SocialButtons;
