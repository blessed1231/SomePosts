import {Outlet} from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";

export const useAuth = () => {
    const user = {loggedin: true}
    return user && user.loggedin
}

export const ProtectedRoutes = () => {
    const auth = useAuth()
    return auth ? <Outlet /> : <LoginPage />
}