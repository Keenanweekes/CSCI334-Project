import React, { Component } from 'react';
import './layout.css';

const CheckInForm = (props) =>  {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentDate = new Date();
    var time = currentDate.toLocaleTimeString();
    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    return (
        <div className="checked-in-container">
            <h3>{props.business}</h3>
            <span>Checked in</span>
            <br></br>
            <span>{day} {month} {year} {time}</span>
            <br></br>
            <button>Check Out</button> 
        </div>
    );
        
}

export default CheckInForm;