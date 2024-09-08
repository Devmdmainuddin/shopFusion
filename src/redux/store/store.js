import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from '../state/cartSlice'
import postsReducer from "../posts/postsSlice";
import authReducer from '../auth/authSlice'
export default configureStore({

    reducer:{
        cart:cartReducer,
        posts:postsReducer,
        auth: authReducer,
    }
    
})