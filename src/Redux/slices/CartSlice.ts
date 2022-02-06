import { createSlice, current } from '@reduxjs/toolkit'
import { Item } from '../../screens/Menu';

const obj = {
    id : null,
    item_name : null,
    price : null,
    count : null
};

const Cart = createSlice({
    name : 'Cart',
    initialState : [] as Item[],
    reducers : {
        addToCart : (state : any, action : any ) => {
            let exists = state.find((item : any) => action.payload.id === item.id);
            console.log('exists is : ', exists);
            if (exists) {
                console.log('repeated item', current(exists));
                exists.count++;
                return state;
            }
            return [...state, action.payload]
        },
        removeFromCart : (state : any, action : any) => { 
            let exists = state.find((item : any, index : number) => action.payload.id === item.id);
            // let existsIndex = state.findIndex((item : any, index : number) => action.payload.id === item.id)
            console.log('exists is : ', exists);
            // console.log('exists index is : ', existsIndex);
            if (exists) {
                console.log('repeated item', current(exists));
                if (exists.count>1) { 
                    exists.count--;
                    return state;
                }
                if(exists.count===1) { 
                    let reduced = state.filter((item : any) => item.id !== action.payload.id);
                    state = reduced;
                    return state;
                }
                return state;
            }
            let reduced = state.filter((item : any) => item.id !== action.payload.id);
            state = reduced;
            console.log('cart after reduction : ', state);
            return state;
         },
         removeItem : (state : any, action : any) => {
             let reduced = state.filter((item : any) => item.id !== action.payload.id );
             state = reduced;
             return state;
         },
         decrementCount : (state : any, action : any) => {
             let exists = state.find((item : any, index : number) => action.payload.id === item.id);
             if (exists) {
                console.log('repeated item', current(exists));
                if (exists.count>1) { 
                    exists.count = action.payload.value;
                    return state;
                }
                if(exists.count===1) { 
                    let reduced = state.filter((item : any) => item.id !== action.payload.id);
                    state = reduced;
                    return state;
                }
                return state;
            }
            let reduced = state.filter((item : any) => item.id !== action.payload.id);
            state = reduced;
            console.log('cart after reduction : ', state);
            return state;
         },
         incrementCount : (state : any, action : any) => {
            let exists = state.find((item : any) => action.payload.id === item.id);
            console.log('exists is : ', exists);
            if (exists) {
                console.log('repeated item', current(exists));
                exists.count = action.payload.value;
                return state;
            }
            return [...state, action.payload]
         },
         clearCart : (state : any, action : any) => {
            state = action.payload.value;
            return state;
         }
        }
    });

export const { addToCart, removeFromCart, decrementCount, incrementCount, clearCart, removeItem } = Cart.actions; 
export default Cart.reducer;