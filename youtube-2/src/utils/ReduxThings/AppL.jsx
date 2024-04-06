import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isopen:false,
    },
    reducers:{
        tooglemenu:(state)=>{
        state.isopen = !state.isopen
    }},
})

export const {tooglemenu} = appSlice.actions

export default appSlice.reducer