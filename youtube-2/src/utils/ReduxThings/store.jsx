import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppL"
import user from "./user";
const store  = configureStore({
 reducer:{
    app: appSlice,
   userdata:user
 }
})

export default store