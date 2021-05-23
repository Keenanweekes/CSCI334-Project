import React, { Component, useState } from 'react';
import './layout.css';
import fire from '../fire';

const Message = (props) => {

    function checkIfEmpty(){
        var emptyCheck = [];
        if(props.messageText != ""){
            emptyCheck = props.messageText;
        }

        return emptyCheck;
    }

    return(
        <div className="message-wrap">

            <h1 className="message-header">Messages</h1>
            {checkIfEmpty().map((data, key) => {
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