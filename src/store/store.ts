import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./ducks/auth/slice.ts";
import {todoReducer} from "./ducks/todoList/slice.ts";

const store = configureStore({
    reducer: {
        user: authReducer,
        todo: todoReducer
    }
})

export default store