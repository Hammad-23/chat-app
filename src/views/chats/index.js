import React, { useEffect, useState } from "react";
import { getAllUsers, joinRoom } from "../../config/firebase";
import { useHistory } from "react-router-dom";

export default function Chats() {
  let history = useHistory();
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    try {
      const response = await getAllUsers();
      console.log(response);
      let tempUsers = [];
      response.forEach((doc) => {
        tempUsers.push({ ...doc.data(), id: doc.id });
      });
      setUsers(tempUsers);
    } catch (e) {
      alert(e.message);
    }
  }, []);
  const navigateToChat = async (id) => {
    const chatroom = await joinRoom(id);
    console.log("chatroom**", chatroom.id);
    history.push(`/chatroom/${chatroom.id}`);
  };
  return (
    <div>
      <h1>Chats</h1>

      {users.map(({ fullname, id }) => {
        return (
          <>
            <li key={id}>{fullname}</li>
            <button onClick={() => navigateToChat(id)}>Chat</button>
          </>
        );
      })}
    </div>
  );
}
