import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBPdWI6bKhJ6dI3xvoR_h95DXmtHMkq_cE",
    authDomain: "react-firebase-chat-app-3b8de.firebaseapp.com",
    projectId: "react-firebase-chat-app-3b8de",
    storageBucket: "react-firebase-chat-app-3b8de.appspot.com",
    messagingSenderId: "666859596598",
    appId: "1:666859596598:web:28df4c4cd6b560cd136197",
    measurementId: "G-S7X6HDN53W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics(); //통계 부분


  export default firebase;