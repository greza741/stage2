import { ThreadEntity } from "@/entities/thread-entity";
import { apiv1 } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export function useThreadById(threadId: string) {
  async function useThreadById() {
    const response = await apiv1.get<null, { data: ThreadEntity[] }>(
      `/threads/${threadId}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<ThreadEntity[], Error, ThreadEntity[]>({
    queryKey: ["threads"],
    queryFn: useThreadById,
  });

  return {
    data,
    isLoading,
  };
}
