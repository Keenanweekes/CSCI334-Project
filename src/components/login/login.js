import React, { Component, useState } from "react";
import Register from "./register";
import Test from "./test";

const Login = () => {
  const [state, setstate] = useState('start');

  return (
    <div className="base-container" >
      {state === 'start' && (
      <div className="login-stuff">
        <h1 className="login-header">COVID RESPONSE</h1>
        <h2 className="login-box-header">LOG IN</h2>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <input type="text" name="email" placeholder="Email" />
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
        </div>
        <div className="buttons">
          <button type="button" className="sign-in-button" onClick={() => setstate("Test")}>
            Sign In
          </button>
          <button type="button" className="sign-up-button" onClick={() => setstate("Register")}>Sign Up</button>
        </div>
        <div className="password-recovery">
          <a className="password-recovery-text">Forgotten Password?</a>
        </div>
        <footer className="log-in-footer">
          <a className="privacy-policy">Privacy Policy</a>
          <a className="terms-of-use">Terms of Use</a>
        </footer>
        </div>)}

        <div>
          {state === "Test" && <Test />}
          {state === "Register" && <Register />}
        </div>

    </div>


  );
}




export default Login;