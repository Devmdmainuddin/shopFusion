
import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: "cart",
    initialState: {
        cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addToCart(state,action) {

            let findProduct = state.cartItem.findIndex((item) => item.id == action.payload.id)
            if(findProduct !== -1){
            state.cartItem[findProduct].qun += 1;
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
            }else {
            state.cartItem=[...state.cartItem, action.payload]
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
            }
            
        },
        changeQuantity(state, action) {
            let findProduct = state.cartItem.findIndex(item => item.productId === action.payload.id)
            if (findProduct > 0) {
                state.cartItem[findProduct].qun += 1;
            } else {
                state.cartItem = (state.cartItem).filter(item => item.productId !== action.payload.id);
                // delete state.items[indexProctId]
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItem));

        }
    }
})

export const { addToCart, changeQuantity } = cartslice.actions
export default cartslice.reducer;
