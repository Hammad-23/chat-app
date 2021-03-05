import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chats from '../views/chats'
import ChatRoom from '../views/chatroom'
import SignUp from '../views/signup'
import LogIn from '../views/login'
export default function ReactRouter() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact >
        <SignUp/>
          </Route>
          <Route path="/chatroom/:chatId">
            <ChatRoom />
          </Route>
          <Route path="/chats" >
            <Chats />
          </Route>
          <Route path="/login" >
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}