import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: ''
};

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            return {...action.payload};
        }
    }
});

export const { updateUserData } = userInfoSlice.actions;
export default userInfoSlice.reducer;