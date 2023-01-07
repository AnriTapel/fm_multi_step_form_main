import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const addOnsSlice = createSlice({
    name: 'addOns',
    initialState,
    reducers: {
        newAddOn: (state, action) => {
            return [...state, action.payload];
        }, 
        removeAddOn: (state, action) => {
            return state.filter(it => it !== action.payload);
        }
    }
});

export const {newAddOn, removeAddOn} = addOnsSlice.actions;
export default addOnsSlice.reducer;