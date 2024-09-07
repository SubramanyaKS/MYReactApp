import React from 'react'
import Chatbot from "react-chatbot-kit";
import MessageParser from '../utils/MessageParser';
import ActionProvider from '../utils/ActionProvider';
import config from '../utils/configuration';

const ChatBotComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default ChatBotComponent