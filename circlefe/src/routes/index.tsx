import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./_protected-routes";
import FollowRoute from "./follow";
import HomeRoute from "./home";
import LoginRoute from "./login";
import ProfileRoute from "./profile";
import RegisterRoute from "./register";
import SearchRoute from "./search";
import { Suggestion2 } from "@/features/home/layout/suggestion";

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
    {
      path: "/suggestion2",
      element: <Suggestion2 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
