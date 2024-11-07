import { authRequired } from "../security";
import DashboardLayout from "./layouts/DashboardLayout";
import UsersPage from "./users/pages/UsersPage";

const routes = {
    path: "dash",
    element: authRequired(<DashboardLayout />),
    children: [
        // {
        //     index: true,
        //     element: <MainPage />,
        // },
        {
            path: "users",
            element: <UsersPage />,
        },
        // {
        //     path: "items",
        //     element: <RegisterPage />,
        // }
    ]
};

export default routes;
