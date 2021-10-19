// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCTi8VRu4RmmiNVn9Xznl-GTYliCqqK6IM",
    authDomain: "instagram-clone-3e1b7.firebaseapp.com",
    projectId: "instagram-clone-3e1b7",
    storageBucket: "instagram-clone-3e1b7.appspot.com",
    messagingSenderId: "422472745310",
    appId: "1:422472745310:web:6abf6fae34c41c66ef4fcf",
    measurementId: "G-XP59XV8W30"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export {db, auth, storage}; 