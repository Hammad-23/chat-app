import React, { useState } from "react";
import {signUp,signIn} from '../../config/firebase'
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import Button from '../../components/button'

export default function SignUp() {
    let history = useHistory();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
      signUp({fullname,email,password})
      alert("User Registered")
      history.push('/login')
  };
//   const logIn = async () => {
//     const res= await signIn({email,password})
//     alert("User Successfully Logged In")
//     console.log("response-->",res);
//     localStorage.setItem('userId',res.user.uid)
//     history.push('/login')
// };
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
      {/* <h1>Sign Up</h1>

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
      <button onClick={logIn}>Log In</button> */}


<div style={{ backgroundColor: "white",
    height:'350px',width:'500px',borderRadius:'12px'
    }}>

      <div style={{marginTop:'30px'}}>
        <h1>Sign Up</h1>
      </div>

      <div style={{marginTop:'30px'}}>
          <Input type="text" title=" Enter FullName" onChange={(e) => setFullname(e.target.value)} />
        </div>
        <div style={{marginTop:'30px'}}>
          <Input type="text" title=" Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{marginTop:'30px'}}>
          <Input type="password" title=" Enter Password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div style={{marginTop:'30px'}}>
           <Button text='Sign Up' onClick={register} />
         </div>

      </div>


    </div>
  );
}
