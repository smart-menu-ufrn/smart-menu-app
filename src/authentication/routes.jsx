import { Navigate } from "react-router-dom";
import { authNotRequired } from "../security";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const routes = {
    path: "auth",
    element: authNotRequired(<AuthenticationLayout />),
    children: [
        {
            index: true,
            element: <Navigate to="login" replace />,
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            path: "register",
            element: <RegisterPage />,
        }
    ]
};

export default routes;
