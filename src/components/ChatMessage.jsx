import React from 'react'
import { Image } from 'react-bootstrap'
import { chatbotImages } from '../utils/chatbot'

const ChatMessage = ({ sender, text }) => {
  return (
    <div className='d-flex'>
      {sender === "bot" ? (
        <Image src={chatbotImages.chatbot} alt="chatbot" height={30} width={30} />
      ) : (
        <Image src={chatbotImages.user} alt="user" height={30} width={30} />
      )}
      <div
        className={`p-3 rounded ${sender === "user"
            ? "chatbot-user"
            : "chatbot-bot"
          }`}
        style={{ maxWidth: "75%" }}
      >
        {text}
      </div>
    </div>
  )
}

export default ChatMessage