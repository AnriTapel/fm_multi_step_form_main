import { configureStore } from "@reduxjs/toolkit";
import addOnsReducer from "./reducers/addOnsReducer";
import planReducer from "./reducers/planReducer";
import stepReducer from "./reducers/stepReducer";
import userInfoReducer from "./reducers/userInfoReducer";

export const store = configureStore({
    reducer: {
        step: stepReducer,
        userInfo: userInfoReducer,
        plan: planReducer,
        addOns: addOnsReducer
    }
});