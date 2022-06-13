import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCa9QOqdXQ9qQjH9nLG8XFYMk65oLHKuiY",
  authDomain: "disney-plus-43602.firebaseapp.com",
  projectId: "disney-plus-43602",
  storageBucket: "disney-plus-43602.appspot.com",
  messagingSenderId: "709216495154",
  appId: "1:709216495154:web:31add1b809731ff8663e2b",
  measurementId: "G-24F0RXVDV9",
};

const app = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);

