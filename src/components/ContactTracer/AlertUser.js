import React, { useState } from 'react';
import '../layout.css';
import { userRecords } from './userRecords';

import CloseContact from './CloseContact';
import { modalview } from 'react-ga';

const AlertUser = () => {

    const [active, setActive] = useState("");

    function displayPositiveCases() {
        return (
            <div className="account-container">
                <div className="account-edit">
                    <button>Alert All Close Contacts</button>
                    <h2>Positive Case Records</h2>
                    {userRecords.map((data, key) => {
                        if(data.positive === true) {
                                return (
                                    <div key={key} className="searchResults">
                                        <br></br>
                                        <h3>{data.username}</h3>
                                        <h5>Positive: True</h5>
                                        <br></br>
                                        <h5>Locations:</h5>
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