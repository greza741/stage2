import { ThreadEntity } from "@/entities/thread-entity";
import { apiv1 } from "@/libs/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  CreateThreadFormInputs,
  createThreadScema,
} from "../auth/schemas/thread";
import { CreateThreadDTO } from "../home/types/thread";

export function useHome() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateThreadFormInputs>({
    resolver: zodResolver(createThreadScema),
  });

  async function getThreads() {
    const response = await apiv1.get<null, { data: ThreadEntity[] }>(
      "/threads",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<ThreadEntity[], Error, ThreadEntity[]>({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  const queryClient = useQueryClient();

  async function createThread(data: CreateThreadDTO) {
    const formData = new FormData();
    formData.append("content", data.content);
    formData.append("image", data.image[0]);

    const response = await apiv1.post<null, { data: ThreadEntity }>(
      "/threads",
      formData
    );

    queryClient.invalidateQueries({ queryKey: ["threads"] });

    return response.data;
  }

  const { mutateAsync: createThreadAsync } = useMutation<
    ThreadEntity,
    Error,
    CreateThreadDTO
  >({
    mutationKey: ["createThread"],
    mutationFn: createThread,
  });

  async function onSubmit(data: CreateThreadFormInputs) {
    await createThreadAsync(data);
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    data,
    isLoading,
  };
}
