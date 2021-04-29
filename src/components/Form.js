import React, { Component, useState} from 'react';
import './layout.css';

import CheckedInBox from './CheckedInBox';

const Form = (props) => {
    var d = new Date().toLocaleTimeString();

    const clickCheckIn = () => setActive("CheckedIn");

    const [active, setActive] = useState("");

        return (
            <div>
                <div className="check-in-box">
                    <h2>covid-safe check in form</h2>
                    <form>
                        <label>
                            Business Name
                            <input type="text" name="name" id="business" />
                        </label>
                        <label>
                            Suburb
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
                        <input type="submit" value="Add Dependant"></input>
                    </form>
                    <button onClick={clickCheckIn}>Check in</button> 
                </div>

                <div>
                    {active === "CheckedIn" && <div className="checked-in-arrow"></div>}
                    {active === "CheckedIn" && <CheckedInBox business={document.getElementById("business").value}/>}                          
                </div>           
            </div>
        );
}

export default Form;