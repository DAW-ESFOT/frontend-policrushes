import React, {useEffect, useState} from 'react';
import ChatList from "../components/chat/ChatList";
import ChatBox from "../components/chat/ChatBox";

export default function Home() {

  const [ id, setId ] = useState(0);
  const [ name, setName ] = useState('');
  const [ photoURL, setPhotoURL] = useState('');
  const [ messages, setMessages ] = useState([]); 

  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingTop: 100, margin: "0 auto" }}>
        {/* chat */}
        <ChatList />
        <br/>
        <br/>
        <ChatBox />
        {/* inicio */}
      </div>
    </div>
  );
}
