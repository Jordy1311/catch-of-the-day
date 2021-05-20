import Rebase from "re-base";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAj8IgB7-HxHS0XDb8g8tum7QygxDJkbC8",
  authDomain: "catch-of-the-day-886d7.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-886d7-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-886d7",
  storageBucket: "catch-of-the-day-886d7.appspot.com",
  messagingSenderId: "578980638716",
  appId: "1:578980638716:web:1ad2f6cf2ee96b2e018c79",
  measurementId: "G-1DLK64LFRJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;