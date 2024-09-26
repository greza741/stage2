import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./_protected-routes";
import HomeRoute from "./home";
import LoginRoute from "./login";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";
import Search from "./search";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <RegisterRoute />,
    },
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      element: <ProtectedRoutes />,
      children: [],
    },
    {
      path: "/",
      element: <LoginRoute />,
    },
    {
      path: "/profile",
      element: <ProfileRoute />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return <RouterProvider router={router} />;
}
