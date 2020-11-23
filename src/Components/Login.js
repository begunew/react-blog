import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Register } from "./Register";
export const Login = () => {
  return (
    <form method="POST">
      <div className="login">
        <h2>Login</h2>
        <input className="login-input" type="text" placeholder="Login ID" />
        <input
          className="login-input space"
          type="password"
          placeholder="Password"
        />
        <input type="submit" className="login-button space" value="Log In" />
        <p className="alt">
          <Router>
            <Link to="/register">Don't have an account yet? Sign up here!</Link>
          </Router>
        </p>
      </div>
    </form>
  );
};
