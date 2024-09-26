import { useAppSelector } from "@/hooks/use-store";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  const { id, role } = useAppSelector((state) => state.auth);

  if (id && role === "MEMBER") {
    return <Outlet />;
  }
  return <Navigate to={"/login"} />;
}
