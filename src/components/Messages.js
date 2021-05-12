import React, { Component, useState, useEffect } from 'react';
import './layout.css';
import fire from '../fire';
import Message from './Message';




const db = fire.firestore();

const Messages = (props) => {
    const [messages, setMessages]=useState("");
    const [state, setstate] = useState("start");

    function getUserInformation(){

        db.collection('users').doc(props.currentUser).get().then( user =>{
            const data = user.data()
            setMessages(data);
            setstate('message');
            console.log(data.messages);
        })
        }

    return(
        <div className="message-container">
            {state === 'start' && (
            <button onClick={() => getUserInformation()}>Test</button>
            )}

            {state === 'message' && <Message messageText={messages.messages}/>}

        </div>

    );
        
}

export default Messages;