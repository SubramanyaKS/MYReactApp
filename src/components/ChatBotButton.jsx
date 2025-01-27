import React from 'react'
import { Image } from 'react-bootstrap'
import { chatbotImages } from '../utils/chatbot'

const ChatBotButton = ({ OnClick, title }) => {
    return (
        <button
            onClick={OnClick}
            className="position-fixed bottom-0 end-0 translate-middle-y rounded-circle text-white border-0 fs-4 shadow-lg chatbot-button"
            title={title}
        >
            {/* 💬 */}
            <Image src={chatbotImages.chatbot} alt="icon" height={30} width={30} />
        </button>
    )
}

export default ChatBotButton