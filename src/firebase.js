import firebase from "firebase/compat/app";

import { initializeApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyABgRiTD0kmsSxhRp6fLtd07XppiZirYhY",
  authDomain: "reactjs-todos-a5657.firebaseapp.com",
  databaseURL: "https://reactjs-todos-a5657-default-rtdb.firebaseio.com",
  projectId: "reactjs-todos-a5657",
  storageBucket: "reactjs-todos-a5657.appspot.com",
  messagingSenderId: "378011793439",
  appId: "1:378011793439:web:af7af07ef3aceb5f5f7d2a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);
// const database = getDatabase();


export { db, auth, storage };
