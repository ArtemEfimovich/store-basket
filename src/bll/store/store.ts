import thunkMiddleware from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import { basketReducer } from '../reducers/basketReducer';


export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().prepend(thunkMiddleware)]
})

export type AppRootStateType = ReturnType<typeof store.getState>
