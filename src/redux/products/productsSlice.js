import {  createSlice } from "@reduxjs/toolkit"

const initialState ={
    products:[],
    isloading:false,
    error:null,
}
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},

})
export default productSlice.reducer;