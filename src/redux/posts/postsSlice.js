import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsAPI";
import axios from "axios";


//  checkout info save





const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
}

// 
export const checkout = createAsyncThunk('posts/checkout',
    async (formData) => {
        const response = await axios.post(
          "http://localhost:5000/checkout",
          formData,
          {
            withCredentials: true,
          }
        );
    
        return response.data;
      }
)


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

        // [createUser.pending]: (state) => {
        //     state.loading = true;
        //   },
        //   [createUser.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.users.push(action.payload);
        //   },
        //   [createUser.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.message;
        //   },
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