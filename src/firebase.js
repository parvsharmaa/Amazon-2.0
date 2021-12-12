import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBk_vE_yFSUMA57xpPRCwzhmw5DiGrliYQ",
    authDomain: "cloned-amzn.firebaseapp.com",
    projectId: "cloned-amzn",
    storageBucket: "cloned-amzn.appspot.com",
    messagingSenderId: "225523952956",
    appId: "1:225523952956:web:f59766a272a484f3e30239",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth };