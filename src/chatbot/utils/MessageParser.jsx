import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    else if(message.includes('about')){
      actions.handleAbout();
    }
    else if (message.includes('project')) {
      actions.handleProject();
    }
    else if (message.includes('experience')){
      actions.handleExperience();
    }
    else if (message.includes('education')) {
      actions.handleEducation();
    }
    else if (message.includes('skill')){
      actions.handleSkills();
    }
    else{
      actions.handleNotUnderstood();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;