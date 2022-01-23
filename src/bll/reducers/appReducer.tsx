import {createSlice} from "@reduxjs/toolkit";



export type AppStatusType = "init"| "success"| "error"



export const appReducer = createSlice({
    name: 'app',
    initialState:{
        status: "init" as AppStatusType
    },
    reducers:{

    }
})
