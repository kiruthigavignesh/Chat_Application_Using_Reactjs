import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA45D_8bzNjvnGsqInOc-PMNKtxZneqlnU",
  authDomain: "chatapp-51d0f.firebaseapp.com",
  projectId: "chatapp-51d0f",
  storageBucket: "chatapp-51d0f.appspot.com",
  messagingSenderId: "73932995470",
  appId: "1:73932995470:web:3c9a0a0c3cfe08128482df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db = getFirestore()