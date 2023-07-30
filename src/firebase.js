
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHzM0mMWcHAvNbBQ_vfKYzg3nPKOnGtwE",
    authDomain: "recipe-finder-b0f1d.firebaseapp.com",
    projectId: "recipe-finder-b0f1d",
    storageBucket: "recipe-finder-b0f1d.appspot.com",
    messagingSenderId: "26326466642",
    appId: "1:26326466642:web:15a138a9c337d8342adf8b",
    measurementId: "G-311E07DYK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);