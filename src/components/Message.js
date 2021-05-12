import React, { Component, useState } from 'react';
import './layout.css';
import fire from '../fire';

const Message = (props) => {

    return(
        <div className="message-box">

            <p>{props.messageText}</p>

        </div>

    );

}

export default Message;