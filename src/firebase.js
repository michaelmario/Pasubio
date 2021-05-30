import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';
import 'firebase/messaging';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCmawzOuBkrhK9P7kRcIOhIcOcXimKWdKo",
    authDomain: "pasubio-23b28.firebaseapp.com",
    projectId: "pasubio-23b28",
    storageBucket: "pasubio-23b28.appspot.com",
    messagingSenderId: "1043326452969",
    appId: "1:1043326452969:web:4213497d8cd62615189c78",
    measurementId: "G-9YJQ1J6TXL"
  };
   // Initialize Firebase
   const fb = firebase.initializeApp(config);
   const fm = firebase.messaging();
 
    const db = firebase.firestore();
    const fA = firebase.auth;

 export {fb,db,fA,fm}