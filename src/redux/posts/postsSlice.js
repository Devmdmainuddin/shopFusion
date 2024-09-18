import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsAPI";
import axios from "axios";


//  checkout info save
const initialState = {
    posts: [],
    selectedCheckout: null,
    isLoading: false,
    isError: false,
    error: null,
}

// add checkout
export const checkout = createAsyncThunk(
    'posts/checkout',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "https://shop-fusion-server-one.vercel.app/checkout",
                formData,
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            // Log error and return it with rejectWithValue for better error handling
            console.error("Checkout error:", error);
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
// get checkout
export const getCheckout = createAsyncThunk(
    'posts/getCheckout',
    async (email, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://shop-fusion-server-one.vercel.app/checkout/${email}`,  // Endpoint for general checkout data
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            // Log error and return it with rejectWithValue for better error handling
            console.error("Get Checkout error:", error);
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
// delete checkout
export const deleteCheckout = createAsyncThunk(
    'posts/deleteCheckout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.delete(
                `https://shop-fusion-server-one.vercel.app/checkout`,
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            // Log error and return it with rejectWithValue for better error handling
            console.error("Delete Checkout error:", error);
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// get all product

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async () => {
        const posts = await getPosts();
        return posts
    }
)
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(checkout.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(checkout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
                state.isError = false;
            })
            .addCase(checkout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            // Get general checkout data
            .addCase(getCheckout.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getCheckout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedCheckout = action.payload;  // Store general checkout data
                state.isError = false;
            })
            .addCase(getCheckout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            // Delete checkout
            .addCase(deleteCheckout.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteCheckout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                // Remove the deleted checkout from the state
                state.posts = state.posts.filter(post => post.id !== action.meta.arg);
            })
            .addCase(deleteCheckout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
                state.isError = false;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
    }
})
export default postsSlice.reducer;