import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA8xNcHo5146f--iQdbHukqp5olNAlJUdo",
  authDomain: "chat-app-31c02.firebaseapp.com",
  projectId: "chat-app-31c02",
  storageBucket: "chat-app-31c02.appspot.com",
  messagingSenderId: "949243152097",
  appId: "1:949243152097:web:90624484e213be181bd9a0",
  measurementId: "G-FLN39NNP96",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

async function getAllUsers() {
  return await db.collection("users").get();
}

async function signUp({ fullname, email, password }) {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    db.collection("users").doc(user.user.uid).set({ fullname, email });
  } catch (e) {
    alert(e.message);
  }
}

async function signIn({ email, password }) {
  try {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    alert(e.message);
  }
}

async function joinRoom(friendId) {
  const myUid = localStorage.getItem("userId");
  try {
    let response = await db
      .collection("chatrooms")
      .where("user1", "==", myUid)
      .where("user2", "==", friendId)
      .get();
    console.log("chatroom users-->", response);
    let foundChatroom = false;
    response.forEach((doc) => {
      console.log("docData-->", doc.data());
      foundChatroom = { ...doc.data(), id: doc.id };
    });

    if (foundChatroom) return foundChatroom;

    // for second user

     response = await db
      .collection("chatrooms")
      .where("user2", "==", myUid)
      .where("user1", "==", friendId)
      .get();
    // console.log("chatroom users-->", response);
    // let foundChatroom = false;
    response.forEach((doc) => {
      // console.log("docData-->", doc.data());
      foundChatroom = { ...doc.data(), id: doc.id };
    });

    if (foundChatroom) return foundChatroom;


    // end

    return await db.collection("chatrooms").add({
      user1:myUid,
      user2:friendId,

      timestamp: Date.now(),
    });
  } catch (e) {
    alert(e.message);
  }
}

function sendMessageToDb(messages,chatId){
  const myUid = localStorage.getItem("userId");
  db.collection('chatrooms').doc(chatId).collection('messages').add({
    messages,
    userId:myUid,
    timestamp:Date.now()
  })
}

 async function getMessages(chatId){

 return  db.collection('chatrooms').doc(chatId).collection('messages').get()

}

export { getAllUsers, signUp, signIn, joinRoom, sendMessageToDb, getMessages };
