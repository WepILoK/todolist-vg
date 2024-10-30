import {useEffect} from "react";
import {AppDispatch, autoAuth} from "./store";
import {useDispatch} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {Container} from "@mui/material";

import {router} from "./router";

import "./App.css"

function App() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(autoAuth())
        }
    }, [])

    return (
        <div className="app">
            <div className="layout">
                <Container>
                    <RouterProvider router={router}/>
                </Container>
            </div>
        </div>
    )
}

export default App
