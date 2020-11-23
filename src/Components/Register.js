import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Login";
export const Register = () => {
  return (
    <div className="register">
      <h2>Registration</h2>
      <input className="login-input" type="text" placeholder="Username" />
      <input
        className="login-input space"
        type="password"
        placeholder="Password"
      />
      <input type="submit" className="login-button space" value="Register" />
      <p className="alt">
        <Router>
          <Link to="/login">Already have an account yet? Log in here!</Link>
        </Router>
      </p>
    </div>
  );
};
