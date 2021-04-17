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

    //blank react state values which will be updates depending on what the user types into the text field
    this.state = ({
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      dob: "",
      address: "",
      type: ""
    })

    this.handleChange = this.handleChange.bind(this);
    this.createRecord = this.createRecord.bind(this);
  }

  //handle change function which takes whatever the user inout is in any of the fields, 
  //matches the same react state with the name of the field and updates that react state with the users input
  handleChange = (event) =>
  {
    const value = event.target.value
    this.setState({...this.state,[event.target.name]: value});}

  //when submit is pressed it gathers all of the user input fields that were saved to the react state and saves them into firebase
  createRecord(event)
  {
    docRef.set({
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      mobile: this.state.mobile,
      email: this.state.email,
      dob: this.state.dob,
      address: this.state.address,
      type: this.state.type
    }
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
              <input type="text" name="username" placeholder="username" value = {this.state.username} onChange = {this.handleChange}/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value = {this.state.password} onChange = {this.handleChange}/>
              <label htmlFor="firstname">FirstName</label>
              <input type="text" name="firstname" placeholder="firstname" value = {this.state.firstname} onChange = {this.handleChange}/>
              <label htmlFor="lastname">LastName</label>
              <input type="text" name="lastname" placeholder="lastname" value = {this.state.lastname} onChange = {this.handleChange}/>
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="mobile" value = {this.state.mobile} onChange = {this.handleChange}/>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value = {this.state.email} onChange = {this.handleChange}/>
              <label htmlFor="dob">Date Of Birth</label>
              <input type="text" name="dob" placeholder="Date Of Birth" value = {this.state.dob} onChange = {this.handleChange}/>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" placeholder="Address" value = {this.state.address} onChange = {this.handleChange}/>
              <label htmlFor="type">User Type</label>

              <select name = "type" value = {this.state.type} onChange = {this.handleChange}>
                <option value = "contacttracer">Contact Tracer</option>
                <option value = "healthcare">HealthCare Worker</option>
                <option value = "general public">General Public Member</option>
              </select>
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
