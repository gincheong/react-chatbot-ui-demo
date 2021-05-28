import React, { useEffect, useState } from 'react';
import ChatBotUI, { MessageList, TextInput } from 'react-chatbot-ui';
// import ChatBotUI, { MessageList } from './lib';
import styled from 'styled-components';
import produce from 'immer';

const StyledApp = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const App = () => {
  const [messageList, setMessageList] = useState<MessageList>([
    {
      mid: 1,
      type: 'left', 
      youtube: 'https://www.youtube.com/watch?v=2EKrkzG0eVQ'
    },
    {
      mid: 2,
      type: 'left', 
      image: 'https://random.imagecdn.app/600/600'
    },
  ]);
 
  const config = {
    inputBox: true,
    sendCallback: (value: TextInput) => {
      setMessageList(
        produce(messageList, draft => {
          draft.push({
            mid: messageList.length + 1, 
            type: 'right',
            text: value.payload
          })
        })
      );
    },
  }

  useEffect(() => {
    console.log(messageList);
  }, [messageList]);


  return (
    <StyledApp>
      <ChatBotUI
        messageList={messageList}
        config={config}
      />
    </StyledApp>
  );
};
 