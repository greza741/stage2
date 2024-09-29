import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./_protected-routes";
import FollowRoute from "./follow";
import HomeRoute from "./home";
import LoginRoute from "./login";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";
import SearchRoute from "./search";

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
      children: [
      ],
    },
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "/profile",
      element: <ProfileRoute />,
    },
    {
      path: "/search",
      element: <SearchRoute />,
    },
    {
      path: "/follow",
      element: <FollowRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}
