import { Navigate } from "react-router-dom";


export function authRequired(children) {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";

    return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
}

export function authNotRequired(children) {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";

    return isAuthenticated ? <Navigate to="/dash" replace /> : children;
}

export function authNotMatters(children) {
    return children;
}
