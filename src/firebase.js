import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzEY6gj98OiOOpARyrIPFdCfYegt8-t9w",
  authDomain: "netflix-clone-8898d.firebaseapp.com",
  projectId: "netflix-clone-8898d",
  storageBucket: "netflix-clone-8898d.appspot.com",
  messagingSenderId: "1043437614712",
  appId: "1:1043437614712:web:02bc8e02a0314dac361f8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
