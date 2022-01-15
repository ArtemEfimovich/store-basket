import {configureStore} from '@reduxjs/toolkit'
import {actionTypes, firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import {basketReducer} from "../reducers/basketReducer";


export const store = configureStore({
    reducer: {
        firebaseReducer,
        firestoreReducer,
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR]
        }
    }),
})

export type AppRootStateType = ReturnType<typeof store.getState>


