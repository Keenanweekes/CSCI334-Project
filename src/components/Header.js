import React, { Component } from 'react';
import NavBar from './NavBar';
import TopBanner from './TopBanner';
import './layout.css';

const Header = () => {
    return(
        <header>
            <div>
                <TopBanner />
                <NavBar />
            </div>
        </header>
    );
}

export default Header;