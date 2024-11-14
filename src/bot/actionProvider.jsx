import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage('Insira o seu nome para começa!');
    updateState(messagem)
  }

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages:[...prev.messages, message],
    }));
  }


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { 
            initialAction
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;