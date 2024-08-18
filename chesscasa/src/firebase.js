// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase, ref, remove, onDisconnect, update} from "firebase/database"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuNwRUJ8Uxjp1uS_KIYb0ehkuz03OCZAQ",
    authDomain: "chesscasa-f1975.firebaseapp.com",
    databaseURL: "https://chesscasa-f1975-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chesscasa-f1975",
    storageBucket: "chesscasa-f1975.appspot.com",
    messagingSenderId: "66225634648",
    appId: "1:66225634648:web:2144bd7d9bce68e620792d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getDatabase();

const auth = getAuth()

let uid = ""
signInAnonymously(auth)
    .then(user => {
        uid = user.user.uid
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
    });

export const getUid = () => uid