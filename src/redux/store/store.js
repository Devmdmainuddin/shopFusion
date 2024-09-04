import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from '../state/cartSlice'
import postsReducer from "../posts/postsSlice";

export default configureStore({

    reducer:{
        cart:cartReducer,
        posts:postsReducer
    }
    
})