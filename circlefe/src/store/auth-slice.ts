import { UserStoreDTO } from "@/features/auth/types/dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserStoreDTO = {} as UserStoreDTO;

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserStoreDTO>) {
      return {
        ...state,
        id: action.payload.id,
        fullname: action.payload.fullname,
        email: action.payload.email,
        role: action.payload.role,
      };
    },
    removeUser() {
      return {} as UserStoreDTO;
    },
  },
});
export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
