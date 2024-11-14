import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Bem vindo ao surporte de usuário automático do seu jogo de carro.`)], 
  botName:"Pista de Fogo",
  widgets:[
    {
      widgetName: "startBtn",
      widegetFunc: (props) => <StartBtn {...props} />,
      }
  ]
};

export default config;
