import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../types.ts";

export const selectIsAuth = createSelector(
    (state: RootState) => state,
    (state: RootState) => state.user.isAuth
)