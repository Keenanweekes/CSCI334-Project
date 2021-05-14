import React, { useState } from 'react';
import '../layout.css';
import { userRecords } from './userRecords';
import fire from '../../fire';
import firebase from 'firebase';

import CloseContact from './CloseContact';
import { modalview } from 'react-ga';

var firestore = fire.firestore();

const AlertUser = () => {

    const [active, setActive] = useState("");

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentDate = new Date();
    var time = currentDate.toLocaleTimeString();
    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    function newCloseContactMessage(email) {
        var message = "Dear " + email + ". You have been in close contact with someone who has COVID-19. \n" +
                      "You are at high risk of having and spreading it. Self-isolate now for 14 days. \n\n\n" + 
                      "Message sent: " + time + "  " + day + "/" + month + "/" + year; 
        return message;
    }

    function addMessageToFirebase(email) {
        const docRef = firestore.collection("users").doc(email);
        docRef.update({messages: firebase.firestore.FieldValue.arrayUnion(newCloseContactMessage(email))});
       

    }

    function messagePositiveCases() {
        userRecords.map((data, key) => {
            if(data.positive === true){

                addMessageToFirebase(data.username);
                
            }
        })

        
    }

    function displayPositiveCases() {
        return (
            <div className="account-container">
                <div className="account-edit">
                    <h2>Positive Cases</h2>
                    {userRecords.map((data, key) => {
                        if(data.positive === true) {
                                return (
                                    <div key={key} className="searchResults">
                                        <br></br>
                                        <h3>{data.username}</h3>
                                        <h5>Positive: True</h5>
                                        <br></br>
                                            <div>
                                                {
                                                    data.locations.map((locations) => {
                                                        return (
                                                            <div>
                                                                <div>{locations.businessName} {locations.suburb}</div>
                                                                <div>{locations.checkIn}</div>
                                                                <div>{locations.checkOut}</div>
                                                                <br></br>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            
                                           
                                    </div>
                                )
                        }
                    })}
                <button onClick={() => messagePositiveCases()}>Alert All Close Contacts</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="account-container">
                <div className="account-edit">
                <h2>Dashboard</h2>
                    <button onClick={() => setActive("SearchResults")}>Search Positive Cases</button>     
                </div>
            </div>

            <div>
                {active === "SearchResults" && displayPositiveCases()}
                {active === "CloseContacts" && <CloseContact locations={document.getElementById("location").value}/>}
            </div>
        </div>
        
    );
}

export default AlertUser;