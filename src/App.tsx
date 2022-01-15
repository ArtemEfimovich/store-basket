import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import RouteComponent from "./routes/RouteComponent";
import {initializeApp} from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDpyqQX4f3rbhPOQjGHLT-BtswBd4lbsQM",
    authDomain: "store-basket.firebaseapp.com",
    projectId: "store-basket",
    storageBucket: "store-basket.appspot.com",
    messagingSenderId: "203762527651",
    appId: "1:203762527651:web:640f3c07875454fdf33e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






function App() {
    return (
        <div className="App">
            <Header/>
            <RouteComponent/>
        </div>
    );
}

export default App;
