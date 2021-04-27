import React, { Component } from 'react';
import './layout.css';

class TopBanner extends Component {
    render() {
        return (
            <div className="topBar">
                <h2>COVID-RESPONSE<span className="right"><a href="https://www.health.nsw.gov.au/Infectious/covid-19/Pages/latest-updates.aspx" target="_blank">NSW Government</a></span></h2>
            </div>
        );
    }

}

export default TopBanner;