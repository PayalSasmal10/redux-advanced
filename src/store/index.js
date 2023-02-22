import { configureStore, createSlice } from "@reduxjs/toolkit";



const initialState = { showToggle: false };
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        cartToggle(state){
            state.showToggle = !state.showToggle;
        }
    }
});

const store = configureStore({
    reducer: {cart : cartSlice.reducer}
});

export const cartActions = cartSlice.actions;

export default store;