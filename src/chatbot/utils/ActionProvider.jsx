// in ActionProvider.jsx
import React from 'react';
import { chatbootdata } from '../../data/data';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleData = (data) => {
    const botMessage = createChatBotMessage(data);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

  }
  const handleWidgetData = (widgetname, message) => {
    const botMessage = createChatBotMessage(
      message,
      {
        widget: widgetname,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const handleHello = () => {
    handleData('Hello. Nice to meet you.')
  };
  const handleAbout = () => {
    handleData(chatbootdata.about);
  };
  const handleSkills = ()=>{
    handleData(chatbootdata.skills);
  }
  const handleExperience = () => {
    handleWidgetData('experience', "Here's is Subramanya's Experience")
  };
  
  const handleEducation = () => {
    handleWidgetData('education', "Here's is Subramanya's Education")
  };
  
  const handleProject = () => {
    handleWidgetData('project', "Here's is Subramanya's Projects")
  };

  const handleNotUnderstood=()=>{
    handleData("Sorry !! could not get you")
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleAbout,
            handleProject,
            handleExperience,
            handleEducation,
            handleSkills,
            handleNotUnderstood,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;