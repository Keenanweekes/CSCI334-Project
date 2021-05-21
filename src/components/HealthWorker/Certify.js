import React from 'react';
import '../layout.css';
import firebase from "firebase/app";
import fire from '../../fire';

var firestore = fire.firestore();

const Certify = () => {

    function getForm(){

        var ID = document.getElementById("ID").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var vaccineBrand = document.getElementById("vaccineBrand").value;
        var dosageNum = document.getElementById("dosageNum").value;

        if(dosageNum == 1){
           firestore.collection("users").doc(ID).update({dosage1: [ID, date, time, vaccineBrand, dosageNum]});
        }

        if(dosageNum == 2){
            firestore.collection("users").doc(ID).update({dosage2: [ID, date, time, vaccineBrand, dosageNum]});
        }
        
    }

    return (
        <div className="account-container">
            <div className="account-edit">
                <h2>Certify Vaccination</h2>
                    <div>
                        <label>
                            ID
                            <input type="text" id="ID"name="name"  />
                        </label>
                        <label>
                            Date
                            <input id="date"type="date" />
                        </label>
                        <label>
                            Time
                            <input type="text" id="time"name="name" />
                        </label>
                        <label>
                            Vaccine Brand
                            <input type="text" id="vaccineBrand"name="name" />
                        </label>
                        <label>
                            Dosage #
                            <input type="text" id="dosageNum" name="name" />
                        </label>
                        <button onClick={() => getForm()}>Certify</button>
                    </div>
            </div>
        </div>
    );
}

export default Certify;