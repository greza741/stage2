import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./home";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";
import LoginRoute from "./login";
import LeftBar from "@/features/home/component/left-bar";


export function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeRoute />,
        },
        {
            path: "/profile",
            element: <ProfileRoute />,
        },
        {
            path: "/register",
            element: <RegisterRoute />,
        },
        {
            path: "/login",
            element: <LoginRoute />,
        },
        {
            path: "/test",
            element: <LeftBar />,
        },
    ])

    return <RouterProvider router={router} />;
}