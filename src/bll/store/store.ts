import { configureStore } from '@reduxjs/toolkit'
import {actionTypes, firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import { initializeApp } from "firebase/app";
import {basketReducer} from "../reducers/basketReducer";



export const store = configureStore({
    reducer: {
        firebaseReducer,
        firestoreReducer,
        basket:basketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR]
        }
    }),
})

export type AppRootStateType = ReturnType<typeof store.getState>


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