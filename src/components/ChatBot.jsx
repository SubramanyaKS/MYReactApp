import React from "react";
import { useChatBot } from "../hook/useChatBot";
import ChatBotButton from "./ChatBotButton";
import { chatbotImages } from "../utils/chatbot";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotInput from "./ChatBotInput";
import ChatMessage from "./ChatMessage";

const ChatBot = () => {
  const { isChatbotVisible, setIsChatbotVisible, messages, handleKeyPress, userInput, handleSendMessage, setUserInput } = useChatBot();

  return (
    <div>
      <ChatBotButton title={isChatbotVisible ? "Close Chatbot" : "Open Chatbot"} OnClick={() => setIsChatbotVisible(!isChatbotVisible)} />
      {isChatbotVisible && (
        <div
          className="p-0 mb-5 shadow-lg position-fixed chatbot-card"
        >
          <ChatBotHeader title={"ChatBot"} image={chatbotImages.chatbot} />
          <div
            className="card-body chatbot-cardbody"
          >
            {messages.map((msg, index) => (

              <div
                key={index}
                className={`d-flex mb-3 ${msg.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                  }`}
              >
                <ChatMessage sender={msg.sender} text={msg.text} />
              </div>
            ))}
          </div>
          <ChatBotInput
            value={userInput}
            OnChange={(e) => setUserInput(e.target.value)}
            OnKeyPress={handleKeyPress}
            OnClick={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
