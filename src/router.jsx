import { createBrowserRouter } from "react-router-dom";
import authenticationRoutes from "./authentication/routes";
import dashboardRoutes from "./dashboard/routes"
import App from "./App";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                authenticationRoutes,
                dashboardRoutes,
            ]
        },
    ]
)

export default router;
