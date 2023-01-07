import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    planId: null,
    isMonthly: true
}

export const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        selectPlan: (state, action) => {
            return {...state, planId: action.payload}
        },
        setIsMonthly: (state, action) => {
            return {...state, isMonthly: action.payload}
        }
    }
})

export const {selectPlan, setFreeMonth, setIsMonthly} = planSlice.actions;
export default planSlice.reducer;