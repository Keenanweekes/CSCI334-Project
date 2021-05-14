import React, { Component, useState } from 'react';
import './layout.css';
import fire from '../fire';

const Message = (props) => {

    return(
        <div className="message-wrap">

            {props.messageText.map((data, key) => {
                return(
                    <div className="message-box">
                    <div key={key}>
                        <p>{data}</p>
                    </div>
                    </div>
                )
            })}

        </div>

    );

}

export default Message;