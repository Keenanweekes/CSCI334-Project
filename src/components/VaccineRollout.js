import React, { Component } from 'react';
import { phaseData } from './phaseData';
import './layout.css';

const VaccineRollout = () => {
    
    return(
        <div>
            <h1 className="head__text">VACCINE ROLLOUT INFO</h1>
            {phaseData.map((data, key) => {
                return (
                    <div key={key} className="phase-container">
                        <h3>{data.phaseNumber}</h3>
                        <ul>
                            {
                                data.groups.map((groups) => {
                                    return (
                                        <li>
                                            {groups.group}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })}
        </div>
    );

}

export default VaccineRollout;

