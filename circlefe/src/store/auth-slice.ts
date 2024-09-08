import { User } from "@/types/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: User = {} as User

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            return {
                ...state,
                id: action.payload.id,
                fullname: action.payload.fullname,
                email: action.payload.email,
            }
        },
        removeUser() {
            return {} as User
        }
    }
})
export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer