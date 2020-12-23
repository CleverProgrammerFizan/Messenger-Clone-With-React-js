import './App.css';
import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message';
import { db } from './firebase'
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';


function App() {

        //  All of the const and functions will go under here

        const [input, setInput] = useState('');
        const [messages, setMessages] = useState([])
        const [username,setUsername] = useState('');
        const sendMessage = (event) => {
          event.preventDefault();

          db.collection('messages').add({
            message: input,
            // username : username,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
            //serverTimezone which location we selected to host our database
          })
          setInput("");
        };
        useEffect(() => {
            db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
              setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
            })
        }, [])
        useEffect (() => {
          setUsername(prompt('Please Enter Your Username'));
         }, [] )
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/150px-Facebook_Messenger_logo_2018.svg.png" alt="" />
      <h2>Welcome, Back {username}</h2>

           <form className="app__form">  
              <FormControl className="app__formControl" >
                      <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
                       <IconButton
                       className='app__sendIcon' 
                       variant="contained" 
                       disabled={!input} 
                       color="primary" 
                       type='submit' 
                       onClick={sendMessage}>
                         <TelegramIcon />
                         </IconButton>
              </FormControl>
           </form>

      <FlipMove>
            {messages.map(({id, message}) => (
              <Message key={id} username={username} message={message} />
            ))}
      </FlipMove>
       
    </div>
  );
}

export default App;


