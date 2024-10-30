import {IAuthAction, IAuthState} from "./types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IAuthState = {
    login: '',
    password: '',
    isAuth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAuthAction>) => {
            localStorage.setItem("auth", JSON.stringify(action.payload));
            state.login = action.payload.login;
            state.password = action.payload.password;
            state.isAuth = true
        },
        autoAuth: (state) => {
            const authInfo = JSON.parse(localStorage.getItem("auth") || '');
            state.login = authInfo.login;
            state.password = authInfo.password;
            state.isAuth = true
        }
    },
})

export const authReducer = authSlice.reducer

export const {
    login,
    autoAuth
} = authSlice.actions