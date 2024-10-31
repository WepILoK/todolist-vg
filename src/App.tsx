import {useEffect} from "react";
import {AppDispatch, autoAuth} from "./store";
import {useDispatch} from "react-redux";
import {RouterProvider} from "react-router-dom";

import {router} from "./router";

import {StyledContainer} from "./components/UI/StyledContainer.ts";

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
            <StyledContainer>
                <RouterProvider router={router}/>
            </StyledContainer>
        </div>
    )
}

export default App
