import {React, useState} from 'react';
import fire from '../../fire';
import MessageSent from './messageSent';
import '../layout.css';
import firebase from 'firebase';

var firestore = fire.firestore();

const AddCase = () => {

    const [email, setEmail]=useState("");
    const [state, setState]=useState("");

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentDate = new Date();
    var time = currentDate.toLocaleTimeString();
    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    function newPositiveMessage(email) {
        var message = "Test Result: Dear " + email + " your recent coronavirus test was POSITIVE. \n" +
                      "If well you can resume normal activities. If you have been previously instructed\n" +
                      " to be isolated because of recent overseas travel or recent contact of a \n" +
                      "proven case you should remain in isolation. If your symptoms get worse please \n" +
                      "see your GP (phone ahead), or go to your closest emergency department if you \n" +
                      "are severely unwell. \n\n\n" + "Message sent: " + time + "  " + day + "/" + month + "/" + year; 
        return message;
    }

    function addMessageToFirebase(email) {
        const docRef = firestore.collection("users").doc(email);
        docRef.update({messages: firebase.firestore.FieldValue.arrayUnion(newPositiveMessage(email))});//thing took so long to get working
    }
    return (
        <div className="account-container">
            <div className="account-edit">
                <h2>Add Case</h2>
                    <div>
                        <label>
                            ID
                            <input type="text" name="name" onChange={event => setEmail(event.target.value)} />
                        </label>
                        <label>
                            Date
                            <input type="date" />
                        </label>
                        <label>
                            Medical Practice
                            <input type="text" />
                        </label>
                        <button onClick={() => {addMessageToFirebase(email); setState("MessageSent")}}>Add</button>
                    </div>
            </div>

            <div>
                {state === "MessageSent" && <MessageSent caseID={email}/>}
            </div>
        </div>
    );
}

export default AddCase;