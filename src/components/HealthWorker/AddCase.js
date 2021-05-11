import React from 'react';
import '../layout.css';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


var firestore = firebase.firestore();

function addCaseToDb()
{
    //get the users inputs in the text fields
    var email = document.getElementById("id").value;
    var date = document.getElementById("date").value;
    var practice = document.getElementById("practice").value;

    var docRef = firestore.collection("users").doc(email);// search for their document in the db

    docRef.update({
        covidPositive:[
            true, date, practice
        ]
    })
    .then(() =>{
        console.log("Success")
        //here we would send a message to the contact tracer to alert them of a positive case for this person
    })
    .catch((error) =>{ 
        console.error("Error updating document: ", error) // possible alert to let the user know that email is incorrect
    })
}

const AddCase = () => {
    return (
        <div className="account-container">
            <div className="account-edit">
                <h2>Add Case</h2>
                    <form>
                        <label>
                            ID
                            <input type="text" id="id"  />
                        </label>
                        <label>
                            Date
                            <input type="date" id = "date" />
                        </label>
                        <label>
                            Medical Practice
                            <input type="text" id = "practice" />
                        </label>
                        <input type="submit" value="Add" onClick = {() => addCaseToDb()}></input>
                    </form>
            </div>
        </div>
    );
}

export default AddCase;