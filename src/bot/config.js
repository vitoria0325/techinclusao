import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';

const config = {
  initialMessages: [createChatBotMessage(`Sejam bem vindos ao suporte ao usuário automático da Grand Chase!`, {
    widget: "startBtn"
  })],
  botName: "Grand Chase AI",
  customComponents: {
    botAvatar: (props) => <Avatar { ... props}/>
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "startSlow",
      widgetFunc: (props) => <StartSlow {...props} />,
    },
  ]
};

export default config;