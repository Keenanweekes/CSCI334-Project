import React, { Component, useState } from 'react';
import './layout.css';

import CheckInForm from './CheckInForm';
import VaccineNews from './VaccineNews';
import VaccineRollout from './VaccineRollout';
import AccountEdit from './AccountEdit';
import StatisticDisplay from './StatisticDisplay';
import LogInScreen from './login/login';
import Messages from './Messages';

const NavBar = (props) => {
    const [active, setActive] = useState("VaccineNews");

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
                            <li><a href="#" onClick={() => setActive("Messages")}>Messages</a></li>
                            <li className="right"><a href="#" onClick={() => setActive("Account")}>{props.userName}</a></li>
                        </ul>

                </nav>
            </div>

            <div>
                {active === "CheckInForm" && <CheckInForm />}
                {active === "VaccineNews" && <VaccineNews />}
                {active === "VaccineRollout" && <VaccineRollout />}
                {active === "CovidStats" && <StatisticDisplay />}
                {active === "Messages" && <Messages currentUser={props.userName}/>}
                {active === "Account" && <AccountEdit />}
            </div>
        </div>
    );
}

export default NavBar;