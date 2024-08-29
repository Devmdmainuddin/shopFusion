import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from '../state/cartSlice'

export default configureStore({

    reducer:{
        cart:cartReducer
    }
    
})