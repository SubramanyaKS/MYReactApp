
import { rules,responses } from "../utils/chatbot";
import { useState } from "react";

export const useChatBot = ()=>{
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I assist you today?" },
      ]);
      const [isChatbotVisible, setIsChatbotVisible] = useState(false);
      const [userInput, setUserInput] = useState("");
    
      const botreply = ()=>{
        const normalizedInput = userInput.toLowerCase();
        var botReply = { sender: "bot", text: "I'm sorry, I didn't understand that."};
        if(normalizedInput=='hi'|| normalizedInput=='hello'){
            botReply = { sender: "bot", text: "Hi, How can I help you?"};
        }
        for (let category in rules) {
          if (rules[category].some((keyword) => normalizedInput.includes(keyword))) {
            botReply = { sender: "bot", text: responses[category] };
            // botResponse = responses[category];
            break;
          }
        }
        
    
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }
    
      const handleSendMessage = () => {
        if (userInput.trim() === "") return;
    
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages);
    
        botreply();
    
        setUserInput("");
      };
    
      const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSendMessage();
      };

      return{handleKeyPress,messages,isChatbotVisible,setIsChatbotVisible,userInput,handleSendMessage,setUserInput}
    
}