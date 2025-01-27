import React from 'react'
import { Image } from 'react-bootstrap'

const ChatBotHeader = ({ title, image }) => {
  return (
    <div
      className="card-header d-flex text-white align-items-center chatbot-header"
    >
      <Image src={image} alt="chatbot" height={30} width={30} />
      <h5 className="ms-2 mb-0">{title}</h5>
    </div>

  )
}

export default ChatBotHeader