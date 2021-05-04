import React, { Component } from 'react';
import './layout.css';
import VaccineCarousal from './VaccineCarousal';

const AccountEdit = () => {
    return (
        <div className="account-container">
            <h3>Account Details</h3>

            <div className="account-edit">
                <form>
                    <label>
                        First Name
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Last Name
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Date of Birth
                        <input type="date" name="name" />
                    </label>
                    <label>
                        Address
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Mobile
                        <input type="text" name="name" />
                    </label>
                    
                    <button>Update Details</button> 
                </form>
            </div>

            <h3>Vaccine Certificates</h3>
            <VaccineCarousal />
        </div>
    );
}   

export default AccountEdit;