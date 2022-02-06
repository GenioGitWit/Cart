import { configureStore } from '@reduxjs/toolkit'; 
import ItemSlice from './slices/ItemSlice';
import CartSlice from './slices/CartSlice';

const store = configureStore({
    reducer : {
        Items : ItemSlice,
        Cart : CartSlice
    }
});

export default store;