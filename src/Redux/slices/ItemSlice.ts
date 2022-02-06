import { createSlice } from '@reduxjs/toolkit'

const Items = createSlice({
    name : 'Items',
    initialState : [] as any[],
    reducers : {
        getItems : (state : any[], action : any) => {
            return state = [...state, action.payload];
        },
        clearStore : (state, action) => {
            return state = action.payload;
        },

     }
});

export const { getItems, clearStore } = Items.actions; 
export default Items.reducer;