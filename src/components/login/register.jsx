import React from "react";
import loginImg from "../../login.svg";

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firestore = firebase.firestore();

const docRef = firestore.collection("users").doc("test");



export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.createRecord = this.createRecord.bind(this);
  }

  handleChange(event)
  {
    this.setState({value: event.target.value});
  }

  createRecord(event)
  {
    docRef.set({
      username: this.state.value}
      ).then(function (){
        console.log("Success");
      }).catch(function(error){
        console.log("Error:", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js"></script>

        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <form className="form-group" onSubmit={this.createRecord}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value = {this.state.value} onChange = {this.handleChange}/>
              <input type = "submit" value = "Submit"/>
            </form>

          </div>
        </div>
        <div className="footer">
          
        </div>
      </div>
    );
  }
}
