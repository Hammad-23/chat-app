import React from "react";
import Input from "../../components/input";
import Button from '../../components/button'

export default function LogIn() {
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
          <Input type="text" title=" Enter Email" />
        </div>

        <div style={{marginTop:'30px'}}>
          <Input type="password" title=" Enter Password" />
        </div>
         <div style={{marginTop:'30px'}}>
           <Button text='Log In' />
         </div>
      </div>
    </div>
  );
}
