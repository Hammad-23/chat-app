import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { sendMessageToDb, getMessages } from '../../config/firebase'

export default function ChatRoom(){
  const [messages,setMessages]=useState('')
  const userId=localStorage.getItem('userId')
  const [conversation,setConvo]=useState([])
  const {chatId}=useParams();
  useEffect(()=>{
    renderMessages()
  },[])
  const renderMessages=async ()=>{
   const response=  await getMessages(chatId)
   const tempMessages=[]
   response.forEach(doc=>{
    tempMessages.push( doc.data() )
   })
   setConvo(tempMessages)
  }
 

  const sendMessage= async ()=>{
    await sendMessageToDb(messages,chatId)
    renderMessages()
  }
 
    return(
      <div>

      <h1>Chatroom</h1>
<div >
      {conversation.map(item=>{
        return( <div style={{textAlign: userId === item.userId ? 'right': 'left'}}>

          <p>{item.messages}</p>
          <p>{item.timestamp}</p>
        </div>
          
           
          )
      })}
</div>
      <div style={{position:'absolute',bottom:0,marginBottom:'8rem'}}>
        <input style={{width:'300px'}} onChange={e=>setMessages(e.target.value)}/>
        <button onClick={()=>sendMessage()} >Send</button>
      </div>


      </div>
    )
}