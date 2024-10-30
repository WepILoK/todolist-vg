import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./ducks/auth/slice.ts";

const store = configureStore({
    reducer: {
        user: authReducer,

    }
})

export default store