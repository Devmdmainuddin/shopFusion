import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../state/cartSlice';
import postsReducer from "../posts/postsSlice";
import authReducer from '../auth/authSlice';
import productsSlice from "../products/productsSlice";
import { productApi } from "../../services/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    posts: postsReducer,
    auth: authReducer,
    products: productsSlice,
    [productApi.reducerPath]: productApi.reducer, // RTK Query Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware), // RTK Query Middleware
});

setupListeners(store.dispatch); // For automatic cache revalidation
