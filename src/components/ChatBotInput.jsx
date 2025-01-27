import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatBotInput = ({OnChange,OnKeyPress,OnClick,value}) => {
  return (
    <div className="card-footer bg-white d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message..."
            value={value}
            onChange={OnChange}
            onKeyPress={OnKeyPress}
          />
          <button type="button" className="btn-success chatbot-send rounded border-0" onClick={OnClick} ><FontAwesomeIcon icon={faPaperPlane}/> </button>
        </div>
  )
}

export default ChatBotInput;