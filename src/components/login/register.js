import React, {Component, useState} from "react";
import Login from "./login";
import './register.css';

import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyDqfKSpPS9v7ExERtD8WpjwEzTRGlUrp-w",
  authDomain: "csci334-project.firebaseapp.com",
  databaseURL: "https://csci334-project-default-rtdb.firebaseio.com",
  projectId: "csci334-project",
  storageBucket: "csci334-project.appspot.com",
  messagingSenderId: "971326205509",
  appId: "1:971326205509:web:d9fafc407b675d118fbd2c",
  measurementId: "G-FY11MJT3LH"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firestore = firebase.firestore();

const createRecord = () => {
  //get each text field and extract the value from it
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var mobile = document.getElementById("mobile").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;  

 //check to see if an empty field was detected
if(email == "" || password == "" || firstname == "" || lastname == "" || mobile == "" || dob == "" || address == "")
{
  alert("Empty field detected")
  return; // need to make this not return to login page
}

//set the document in the database using the users email as a unique identifier.
const promise = firebase.auth().createUserWithEmailAndPassword(email, password); // create new auth user
promise.catch(e=>console.log(e.message));

//real time auth listener to check if user is logged in or not already
//shows a populated user including the logged in users email address which is used  for updating.
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser)
  {
    console.log(firebaseUser);
  }
  else{
    console.log("Not logged in");
  }
})

const docRef = firestore.collection("users").doc(email);
  docRef.set({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    mobile: mobile,
    dob: dob,
    address: address
  }
    ).then(function (){
      console.log("Success");
    }).catch(function(error){
      console.log("Error:", error);
    });
}

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
                <input type="text" id = "email" placeholder = "Email"></input>
              </div>
              <div className="form-group">
                <input type="password" id = "password" placeholder = "Password"></input>
              </div>
              <div className="form-group">
                <input type="text" id = "firstname" placeholder = "First Name"></input>
              </div>
              <div className="form-group">
                <input type="text" id = "lastname" placeholder = "Last Name"></input>
              </div>
              <div className="form-group">
                <input type="text" id = "mobile" placeholder = "Mobile Number"></input>
              </div>
              <div className="form-group">
                <input type="text" id ="dob" placeholder = "Date of Birth"></input>
              </div>
              <div className="form-group">
                <input type="text" id = "address" placeholder = "Address"></input>
              </div>
            </div>
            <div className="buttons">
              <div className="sign-up-button-container">
              <button className="sign-up-button" onClick={() => {setstate("Login"); createRecord()}}>Sign Up</button>
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
        <div > 
          {state === "Login" && <Login />}
        </div>

    </div> 
  );
  }

  export default Register;
