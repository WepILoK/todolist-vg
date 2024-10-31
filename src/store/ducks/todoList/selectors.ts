import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../types.ts";

export const selectTodos = createSelector(
    (state: RootState) => state,
    (state: RootState) => state.todo.data
)