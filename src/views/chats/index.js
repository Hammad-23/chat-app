import React, { useEffect, useState } from "react";
import { getAllUsers, joinRoom } from "../../config/firebase";

export default function Chats() {
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
  const navigateToChat =(id)=>{
    joinRoom(id)
  }
  return (
    <div>
      <h1>Chats</h1>

      {users.map(({ fullname, id }) => {
        return (
          <>
            <li key={id}>{fullname}</li>
            <button onClick={()=>navigateToChat(id)}>Chat</button>
          </>
        );
      })}
    </div>
  );
}
