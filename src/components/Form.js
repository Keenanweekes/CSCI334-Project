import React, { Component, useState} from 'react';
import './layout.css';

import CheckedInBox from './CheckedInBox';
import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";


var firestore = firebase.firestore();
const checkInDb = () =>
{
    var docRef = firestore.collection("users").doc("updateTest");
    docRef.set({
        firstname:"test"
      }
        ).then(function (){
          console.log("Success");
        }).catch(function(error){
          console.log("Error:", error);
        });
    

}
const Form = (props) => {
    var d = new Date().toLocaleTimeString();

    const clickCheckIn = () => {
        if(document.getElementById("business").value != "") {
            setActive("CheckedIn");
        }
    }

    const [active, setActive] = useState("");

        return (
            <div>
                <div className="check-in-box">
                    <h2>covid-safe check in form</h2>
                    <form>
                        <label>
                            Business Name
                            <input type="text"  id="business" />
                        </label>
                        <label>
                            Suburb
                            <input type="text" id = "address" />
                        </label>
                        <label>
                            Email
                            <input type="text" id = "email" />
                        </label>
                        <label>
                            Mobile
                            <input type="text" id = "mobile" />
                        </label>

                        <input type="submit" value="Add Dependant"></input>
                    </form>
                    <button onClick={() => {clickCheckIn(); checkInDb()}}>Check in</button> 
                </div>

                <div>
                    {active === "CheckedIn" && <div className="checked-in-arrow"></div>}
                    {active === "CheckedIn" && <CheckedInBox business={document.getElementById("business").value}/>}                          
                </div>           
            </div>
        );
}

export default Form;