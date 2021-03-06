import React, {useState} from "react";
import Input from "../../components/input";
import Button from '../../components/button'
import {signUp,signIn} from '../../config/firebase'
import { useHistory } from "react-router-dom";

export default function LogIn() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn = async () => {
    const res= await signIn({email,password})
    alert("User Successfully Logged In")
    console.log("response-->",res);
    localStorage.setItem('userId',res.user.uid)
    history.push('/chats')
};
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "620px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "white",
    height:'300px',width:'500px',borderRadius:'12px'
    }}>

      <div style={{marginTop:'30px'}}>
        <h1>Log In</h1>
      </div>
        <div style={{marginTop:'30px'}}>
          <Input type="text" title=" Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{marginTop:'30px'}}>
          <Input type="password" title=" Enter Password" onChange={(e) => setPassword(e.target.value)}  />
        </div>
         <div style={{marginTop:'30px'}}>
           <Button onClick={logIn} text='Log In' />
         </div>
      </div>
    </div>
  );
}
