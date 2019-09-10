import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
const firebaseConfig = {
  apiKey: "AIzaSyA0h05Jv5UwI-7_GzWCTNLKduBpa9T8tG4",
  authDomain: "liveworks-e67a2.firebaseapp.com",
  databaseURL: "https://liveworks-e67a2.firebaseio.com",
  projectId: "liveworks-e67a2",
  storageBucket: "liveworks-e67a2.appspot.com",
  messagingSenderId: "45433853566",
  appId: "1:45433853566:web:dfd26fadc272c4fd"
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => {
  auth.signOut();
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const createNewUserAccount = user => {
  let db = firebase.firestore();
  let docRef = db.collection("users").doc(user.email);
  let newUser = docRef.set({
    name: user.name,
    email: user.email,
    role: user.role,
    password: user.password
  });

  return newUser;
};

export default firebase;
