import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { showToggle: false };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartToggle(state) {
      state.showToggle = !state.showToggle;
    },
  },
});

const cartItemsChangeSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }else{
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalQuantity--;
        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== id)
        }else{
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price
        }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartItemsChange: cartItemsChangeSlice.reducer},
});

export const cartActions = cartSlice.actions;
export const cartItemChangeActions = cartItemsChangeSlice.actions;

export default store;
