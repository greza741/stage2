import { useAppSelector } from "@/hooks/use-store";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  // const { id, role } = useAppSelector((state) => state.auth);

  const token = Cookies.get("token");
  let userLogin = null;
  if (token) {
    try {
      const payLoadBase64 = token.split(".")[1];
      if (payLoadBase64) {
        const decodedPayLoad = JSON.parse(atob(payLoadBase64));
        userLogin = decodedPayLoad;
      }
    } catch (error) {
      console.error("Failed to decode token", error);
    }
  }

  if (userLogin === "MEMBER") {
    return <Outlet />;
  }
  return <Navigate to={"/login"} />;
}
