import React from "react";
const chats = [
  {
    user: {
      name: "ronny",
      photoUrl: "photoUrl",
    },
    date: "hoy",
    messages: [
      {
        content: "hola ronny",
        date: "hoy",
        user: {
          imageUrl: "",
          name: "carlos",
        },
      },
      {
        content: "hola carlos",
        date: "hoy",
        user: {
          imageUrl: "",
          name: "ronny",
        },
      },
    ],
  },
  {
    user: {
      name: "joss",
      photoUrl: "photoUrl",
    },
    date: "hoy",
    messages: [
      {
        owner: "user",
        content: "hola joss",
        date: "hoy",
      },
      {
        owner: null,
        content: "hola carlos",
        date: "hoy",
      },
    ],
  },
];
export default function ChatList() {
  return (
    <ul>
      {chats.map((chat) => (
        <Chat chat={chat} />
      ))}
    </ul>
  );
}

const Chat = ({ chat }) => {
  return (
    <div style={chatStyles}>
      <div>{chat.user.photoUrl}</div>
      <div>{chat.user.name}</div>
      <div>{chat.date}</div>
    </div>
  );
};

const chatStyles = {
  width: 300,
  height: 100,
  border: "solid",
  backgroundColor: "cyan",
};
