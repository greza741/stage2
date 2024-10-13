import { ReplyEntity } from "@/entities/reply-entity";
import { ThreadEntity } from "@/entities/thread-entity";
import { UserEntity } from "@/entities/user-entity";
import { apiv1 } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { CreateThreadFormInputs } from "../auth/schemas/thread";
import { zodResolver } from "@hookform/resolvers/zod";

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

export function useAllReplies() {
  const { threadId } = useParams<{ threadId: string }>();
  async function getAllReplies() {
    const response = await apiv1.get<null, { data: ReplyEntity[] }>(
      `/thread/${threadId}/reply`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  }
  const { data, isLoading } = useQuery<ReplyEntity[], Error>({
    queryKey: ["reply-thread", threadId],
    queryFn: getAllReplies,
    enabled: !!threadId,
  });
  return { data, isLoading };
}

export function useMediaReplies(threadId: number | null) {
  async function getAllReplies() {
    if (!threadId) return [];
    const response = await apiv1.get<null, { data: ReplyEntity[] }>(
      `/thread/${threadId}/reply`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<ReplyEntity[], Error>({
    queryKey: ["reply-thread", threadId],
    queryFn: getAllReplies,
    enabled: !!threadId,
  });
  return {
    data,
    isLoading,
  };
}

export function useAllThread() {
  async function getAllThreads() {
    const response = await apiv1.get<null, { data: ThreadEntity[] }>(
      "/threads",
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  }

  const { data, isLoading, refetch } = useQuery<
    ThreadEntity[],
    Error,
    ThreadEntity[]
  >({
    queryKey: ["threads"],
    queryFn: getAllThreads,
  });
  return {
    data,
    isLoading,
    getAllThreads,
    refetch,
  };
}
