import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC56e_ePz6wPhjappSBwpBpiJ43HhSMLHs",
    authDomain: "clone-yt-a8df7.firebaseapp.com",
    projectId: "clone-yt-a8df7",
    storageBucket: "clone-yt-a8df7.appspot.com",
    messagingSenderId: "1077364521758",
    appId: "1:1077364521758:web:b840871f883b5d85d5670f",
    measurementId: "G-EGGCN0XX5E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
  