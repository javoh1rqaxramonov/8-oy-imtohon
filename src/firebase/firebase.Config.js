import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4QFuWZ3aO1LjxX0W8RST7c5FRCgNLsAA",
  authDomain: "my-project-49ab0.firebaseapp.com",
  projectId: "my-project-49ab0",
  storageBucket: "my-project-49ab0.firebasestorage.app",
  messagingSenderId: "529488066812",
  appId: "1:529488066812:web:191a868e2587ac15f93f79"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);