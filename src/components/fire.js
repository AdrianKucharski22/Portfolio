// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCPRkFfOmud9HWugci8wdS4QRaZQykLK0",
    authDomain: "portfolio-8d6fa.firebaseapp.com",
    projectId: "portfolio-8d6fa",
    storageBucket: "portfolio-8d6fa.appspot.com",
    messagingSenderId: "345397469458",
    appId: "1:345397469458:web:eab8cfbbcbc3c11b9a93cb",
    measurementId: "G-M52LM5LD20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
