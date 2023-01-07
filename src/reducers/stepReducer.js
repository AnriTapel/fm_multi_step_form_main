import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        nextStep: (state) => {
            return state + 1;
        },
        previousStep: (state) => {
            return state - 1;
        }
    }
});

export const { nextStep,  previousStep } = stepSlice.actions;
export default stepSlice.reducer;