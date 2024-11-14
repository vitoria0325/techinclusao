"use client";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config.js';
import MessageParser from '../bot/messageParser.jsx';
import ActionProvider from '../bot/actionProvider.jsx';
import './page.css';

export default function Home() {
  return (
   <div className='App'>
     <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
     />
    </div>

   );
}
