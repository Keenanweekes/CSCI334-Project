import React, {Component, useState} from "react";
import Login from "./login";
import './register.css';

const Register = () =>{
  const [state, setstate] = useState('register');
  
  return (
    <div className="register-base-container">
        {state === 'register' && (
          <div className="register-main">
            <h1 className="register-header">COVID RESPONSE</h1>
            <div className="register-box">
            <h2 className="register-box-header">SIGN UP</h2>
            <div className="form">
              <div className="form-group">
                <input type="text" name="email" placeholder="Email"></input>
              </div>
              <div className="form-group">
                <input type="text" name="username" placeholder="Username"></input>
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password"></input>
              </div>
              <div className="form-group">
                <input type="text" name="first-name" placeholder="First Name"></input>
              </div>
              <div className="form-group">
                <input type="text" name="last-name" placeholder="Last Name"></input>
              </div>
              <div className="form-group">
                <input type="text" name="mobile" placeholder="Mobile Number"></input>
              </div>
              <div className="form-group">
                <input type="text" name="dob" placeholder="Date of Birth"></input>
              </div>
              <div className="form-group">
                <input type="text" name="address" placeholder="Address"></input>
              </div>
            </div>
            <div className="buttons">
              <div className="sign-up-button-container">
              <button className="sign-up-button" onClick={() => setstate("Login")}>Sign Up</button>
              </div>
              <div className="back-button-container">
              <button className="back-button" onClick={() => setstate("Login")}>Back</button>
              </div>
            </div>
            </div>
          <footer className="register-footer">
            <a className="privacy-policy">Privacy Policy</a>
            <a className="terms-of-use">Terms of Use</a>
          </footer>

        </div>)}

        <div>
          {state === "Login" && <Login />}
        </div>

    </div>

  );
  }

  export default Register;
