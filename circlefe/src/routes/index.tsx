import AppLayout from "@/features/home/layout/app-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./home";
import LoginRoute from "./login";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";


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
            element: <AppLayout />,
        },
    ])

    return <RouterProvider router={router} />;
}