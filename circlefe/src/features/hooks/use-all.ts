import { UserEntity } from "@/entities/user-entity";
import { apiv1 } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export function useAllUsers() {
  async function getAllUsers() {
    const response = await apiv1.get<null, { data: UserEntity[] }>(`/users`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.data;
  }

  const { data, isLoading } = useQuery<UserEntity[], Error, UserEntity[]>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return {
    data,
    isLoading,
  };
}
