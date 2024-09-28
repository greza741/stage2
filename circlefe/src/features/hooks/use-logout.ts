import { apiv1 } from "@/libs/api";
import { removeUser } from "@/store/auth-slice";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

export function useLogout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = async () => {
        try{ 
            await apiv1.post('/logout')
            Cookies.remove('token')
            dispatch(removeUser())
            navigate('/login',{replace: true})
        }catch(error){
            console.log(error);
        } 
    }
    return logout
}