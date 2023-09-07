import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
    bookCart:[],
    quantity: 0
  },

  reducers: {
    addToCart: (state, action) => {
        console.log(state,"ddgdgdg",action,"add to cart");
        console.log(action.payload,"payload")
      state.cart.push(action.payload);
    },
    deleteCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    filterCategory: (state,action) => {
         state.cart.filter(action.payload)
  
    },


    sortByprice: (state,action) => {
          console.log(state,"state value",action, "action value")
      state.bookCart = action.payload
    }
    
    },
});

console.log(createSlice.action);
export default cartSlice.reducer;
export const { addToCart, deleteCart,sortByprice} = cartSlice.actions;
