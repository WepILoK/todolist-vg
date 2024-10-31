import {ETodoStatus, ITodo, ITodoState} from "./types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ITodoState = {
    data: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        getTodos: (state) => {
            const todos = JSON.parse(localStorage.getItem("todos") || '[]');
            state.data = todos
        },
        createTodo: (state, action: PayloadAction<ITodo>) => {
            const newData = [{...action.payload}, ...state.data]
            localStorage.setItem("todos", JSON.stringify(newData))
            state.data = newData
        },
        completeTodo: (state, action: PayloadAction<number>) => {
            const newData = state.data.map(item => {
                if (item.id === action.payload) {
                    return {...item, status: ETodoStatus.completed};
                } else return item;
            })
            localStorage.setItem("todos", JSON.stringify(newData))
            state.data = newData
        },
        deleteTodos: (state, action: PayloadAction<number[]>) => {
            const newData = state.data.map(item => {
                if (action.payload.includes(item.id)) {
                    return {...item, status: ETodoStatus.deleted};
                } else return item;
            })
            localStorage.setItem("todos", JSON.stringify(newData))
            state.data = newData
        }
    },
})

export const todoReducer = todoSlice.reducer

export const {
    getTodos,
    createTodo,
    completeTodo,
    deleteTodos,
} = todoSlice.actions