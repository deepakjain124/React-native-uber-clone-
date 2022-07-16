import {configureStore} from "@reduxjs/toolkit";
import newReducer from "./slices/navSlices"
export const store=configureStore({
    reducer:{
        nav:newReducer
    }
})