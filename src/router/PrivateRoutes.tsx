import {Navigate, Outlet} from "react-router-dom";

export const PrivateRoutes = () => {
    const localStorageToken = localStorage.getItem("auth")

    return localStorageToken
        ? <Outlet/>
        : <Navigate to="/todolist-vg" replace/>;
}
