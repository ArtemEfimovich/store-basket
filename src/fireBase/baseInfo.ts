import {initializeApp} from "firebase/app";
import { getDatabase, ref } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDpyqQX4f3rbhPOQjGHLT-BtswBd4lbsQM",
    authDomain: "store-basket.firebaseapp.com",
    projectId: "store-basket",
    storageBucket: "store-basket.appspot.com",
    messagingSenderId: "203762527651",
    appId: "1:203762527651:web:640f3c07875454fdf33e16"
};


export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbRef = ref(getDatabase());
export const db = getDatabase();