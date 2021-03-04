import React, { useState } from "react";
import {signUp,signIn} from '../../config/firebase'
import { useHistory } from "react-router-dom";

export default function SignUp() {
    let history = useHistory();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
      signUp({fullname,email,password})
      alert("User Registered")
  };
  const logIn = async () => {
    const res= await signIn({email,password})
    alert("User Successfully Logged In")
    console.log("response-->",res);
    localStorage.setItem('userId',res.user.uid)
    history.push('/chats')
};
  return (
    <div>
      <h1>Sign Up</h1>

      <input
        placeholder="Enter FullName"
        onChange={(e) => setFullname(e.target.value)}
      />
      <input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter Password"
        type="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Sign Up</button>
      <button onClick={logIn}>Log In</button>
    </div>
  );
}
