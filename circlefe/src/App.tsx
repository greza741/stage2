import Cookies from "js-cookie";
import { useEffect } from "react";
import { UserStoreDTO } from "./features/auth/types/dto";
import { useAppDispatch } from "./hooks/use-store";
import { apiv1 } from "./libs/api";
import { AppRouter } from "./routes";
import { setUser } from "./store/auth-slice";

function App() {
  const dispatch = useAppDispatch()

  async function checkAuthentication() {
    const {data} = await apiv1.get<null, {data: UserStoreDTO}>("/auth/check",{
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      }
    })

    dispatch(
      setUser(data)
    )
  }

  useEffect(() => {
    checkAuthentication()
  }, [])

  return <AppRouter />;

}

export default App
