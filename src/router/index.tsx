import {createBrowserRouter} from "react-router-dom";

import {AuthPage} from "../pages/Auth/AuthPage.tsx";
import {TodoList} from "../pages/TodoList/TodoList.tsx";
import {PrivateRoutes} from "./PrivateRoutes.tsx";


export const router = createBrowserRouter([
    {
        path: "/todolist-vg",
        errorElement: <PrivateRoutes/>,
        children: [
            {
                path: "/todolist-vg",
                element: <AuthPage/>,
            },
            {
                path: "/todolist-vg/todo",
                element: <PrivateRoutes/>,
                children: [
                    {
                        index: true,
                        element: <TodoList/>
                    }
                ]
            },
        ],
    },
]);