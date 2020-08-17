import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9olSz2VoVpR8xOMQMYxSJqvSdYl9gjv8",
  authDomain: "thenetninja-marioplan-e715e.firebaseapp.com",
  databaseURL: "https://thenetninja-marioplan-e715e.firebaseio.com",
  projectId: "thenetninja-marioplan-e715e",
  storageBucket: "thenetninja-marioplan-e715e.appspot.com",
  messagingSenderId: "1094638653066",
  appId: "1:1094638653066:web:50881ed9c68f1724c3a773",
  measurementId: "G-P2B9WY7ZWH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export const db = firebase.firestore();

export default firebase;
