import React,{useState} from 'react'
import roboimage from '../../assets/robo1.png';
import ChatBotComponent from './ChatBotComponent';

const ChatBotContiner = () => {
    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

  return (
    <div>
          <div className="fixed-div" onClick={()=>toggleComponent()}>
              <img src={roboimage} width={50} height={50} />
          </div>

          {showComponent && (
              <div className="component">
                  <ChatBotComponent />
              </div>
          )}
    </div>
  )
}

export default ChatBotContiner