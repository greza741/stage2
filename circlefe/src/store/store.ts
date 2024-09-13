import { User } from "@/types/user"
import { create } from "zustand"
import { devtools } from "zustand/middleware";

type UseAuthStore = { currentUser: User } & {
    setUser: (user: User) => void;
}

export const useAuthStore = create<UseAuthStore>()(
    devtools((set) => ({
        currentUser: {
            id: 0,
            email: "",
            fullname: "",
        },
        setUser: (currentUser) => set((state) => ({ ...state, currentUser }))
    }))
)