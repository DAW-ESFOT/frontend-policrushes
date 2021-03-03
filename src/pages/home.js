import React from "react";
import ChatList from "../components/chat/ChatList";
import ChatBox from "../components/chat/ChatBox";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingTop: 100, margin: "0 auto" }}>
        {/* chat */}
        <ChatList />
        <ChatBox />
        {/* inicio */}
      </div>
    </div>
  );
}
