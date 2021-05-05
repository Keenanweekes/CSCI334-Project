import React, { Component } from 'react';
import { statisticData } from './statisticData';
import './layout.css';

const StatisticDisplay = () => {

    return (
        <div className="big-container">
            {statisticData.map((data, key) => {
                return (
                    <div>
                        <span className="grid-span">{data.date}</span>
                        <div key={key} className="grid-container">
                            <div>{data.newCases} <br></br><span>New Cases</span></div>
                            <div>{data.newVaccinations} <br></br><span>New Vaccinations</span></div>
                            <div>{data.tests}<br></br><span>New Tests</span></div>
                            <div>{data.totalTests}<br></br><span>Total Tests</span></div>
                            <div>{data.totalCases}<br></br><span>Total Cases</span></div>
                            <div>{data.totalVaccinations}<br></br><span>Total Vaccinations</span></div>
                            <div>{data.ICU}<br></br><span>in ICU</span></div>
                            <div>{data.deaths}<br></br><span>Deaths</span></div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default StatisticDisplay;