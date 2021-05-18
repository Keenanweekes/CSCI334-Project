import React, { Component } from 'react';
import NavBar from './NavBar';
import TopBanner from './TopBanner';
import TracerNavBar from './ContactTracer/TracerNavBar';
import './layout.css';
import HealthNavBar from './HealthWorker/HealthNavBar';

const Header = (props) => {

    if(props.userType === "User") {
        return(
            <header>
                <div>
                    <TopBanner />
                    <NavBar userName= {props.email}/>
                </div>
            </header>
        );
    } else if(props.userType === "Tracer") {
        return(
            <header>
                <div>
                    <TopBanner />
                    <TracerNavBar />
                </div>
            </header>
        )
    } else {
        return(
            <header>
                <div>
                    <TopBanner />
                    <HealthNavBar />
                </div>
            </header>
        )
    }
}

export default Header;