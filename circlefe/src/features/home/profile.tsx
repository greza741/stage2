import { AuthContext } from "@/context/auth";
import { useContext } from "react";

export function Profile() {
    const { state } = useContext(AuthContext);

    return <h1>{state?.user?.email}</h1>
}