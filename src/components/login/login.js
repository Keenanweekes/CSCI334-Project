import React, { Component, useState } from "react";
import Register from "./register";
import Header from '../Header';
import '../layout.css';

const Login = () => {
  const [state, setstate] = useState('start');

  /* Testing purposes */
  function getUserType(username) {
    var userType = "User";

    if(username === "ct") {
      userType = "Tracer";
    } else if(username === "hw") {
      userType = "Health";
    } else {
      return userType;
    }

    return userType;
  }

  return (
    <div className="base-container" >
      {state === 'start' && (
        <div className="login-main">
          <h1 className="login-header">COVID RESPONSE</h1>
          <div className="login-box">
          <h2 className="login-box-header">LOG IN</h2>
            <div className="form">
              <div className="form-group">
                <input type="text" className="log-in-email" name="email" placeholder="Email" id="email" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="show-password">
                <input type="checkbox" name="show-password-checkbox" value="Show Password"></input>
                <label for="show-password-checkbox">Show Password</label>
              </div>
              <div className="remember-me">
                <input type="checkbox" name="remember-me-checkbox" value="Remember Me"></input>
                <label for="remember-me-checkbox">Remember Me</label>
              </div>
          </div>
          <div className="buttons">
            <div className="sign-in-button-container">
            <button type="button" className="sign-in-button" onClick={() => setstate("Header")}>
              Sign In
            </button>
            </div>
            <div className="sign-in-button-container">
            <button type="button" className="sign-up-button" onClick={() => setstate("Register")}>Sign Up</button>
            </div>
          </div>
          <div className="password-recovery">
            <a className="password-recovery-text">Forgotten Password?</a>
          </div>
          </div>
          <footer className="login-footer">
            <a className="privacy-policy">Privacy Policy</a>
            <a className="terms-of-use">Terms of Use</a>
          </footer>
        </div>)}

      <div className="state">
          {state === "Header" && <Header userType={getUserType(document.getElementById("email").value)} />}
          {state === "Register" && <Register />}
      </div>

    </div>


  );
}




export default Login;
