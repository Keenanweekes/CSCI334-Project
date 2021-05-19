import React, { useState, useEffect } from 'react';
import './layout.css';

import CheckInForm from './CheckInForm';
import VaccineNews from './VaccineNews';
import VaccineRollout from './VaccineRollout';
import AccountEdit from './AccountEdit';
import StatisticDisplay from './StatisticDisplay';
import LogInScreen from './login/login';
import Messages from './Messages';
import fire from '../fire';

var firestore = fire.firestore();
var docRef = firestore.collection("statistics"); 
var dailyData = []

const NavBar = (props) => {
    const [active, setActive] = useState("VaccineNews");
    const [statData, setStatData] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        ReadStats();
    }, []);

    const ReadStats = event => {
        docRef.get().then((querySnapshot) => {
            var totalCases, totalTests, totalVaccinations
            querySnapshot.forEach((doc) => {
                if (doc.id == "Totals") {
                    totalCases = doc.data().TotalCases
                    totalTests = doc.data().TotalTests
                    totalVaccinations = doc.data().TotalVaccinations
                } else {
                    dailyData.push({
                        date: doc.data().FormattedDate,
                        newCases: doc.data().NewCases,
                        newTests: doc.data().NewTests,
                        newVaccinations: doc.data().NewVaccinations,
                        ICU: doc.data().InICU,
                        deaths: doc.data().Deaths,
                    })
                }
            });
            dailyData.map((data) => {
                data.totalCases = totalCases
                data.totalTests = totalTests
                data.totalVaccinations = totalVaccinations
            })
            setStatData(dailyData)
        });   
    }

    function getUserMessages(){
        if(props.userName != ""){
        firestore.collection("users").doc(props.userName).get().then( user =>{
            const data = user.data();
            setMessages(data.messages);
        })
    }
}

    return(
        <div>
            <div>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                    
                        <ul id="nav" className="nav">
                            <li><a href="#" onClick={() => setActive("VaccineNews")}>Vaccine News</a></li>
                            <li><a href="#" onClick={() => setActive("VaccineRollout")}>Vaccine Rollout</a></li>
                            <li><a href="#" onClick={() => setActive("CheckInForm")}>Check in</a></li>
                            <li><a href="#" onClick={() => setActive("CovidStats")}>Covid-19 Stats</a></li>
                            <li><a href="#" onClick={() => {setActive("Messages"); getUserMessages(props.userName)}}>Messages</a></li>
                            <li className="right"><a href="#" onClick={() => setActive("Account")}>{props.userName}</a></li>
                        </ul>

                </nav>
            </div>

            <div>
                {active === "CheckInForm" && <CheckInForm />}
                {active === "VaccineNews" && <VaccineNews />}
                {active === "VaccineRollout" && <VaccineRollout />}
                {active === "CovidStats" && <StatisticDisplay statData={statData} />}
                {active === "Messages" && <Messages messageArray={messages}/>}
                {active === "Account" && <AccountEdit />}
            </div>
        </div>
    );
}

export default NavBar;