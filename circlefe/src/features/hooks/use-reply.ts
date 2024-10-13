import {
  CreateReplyFormInput,
  replySchema,
} from "@/features/auth/schemas/reply";
import { CreateReplyDTO } from "@/features/auth/types/reply.dto";
import { apiv1 } from "@/libs/api";
import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export function useReplyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateReplyFormInput>({
    resolver: zodResolver(replySchema),
  });
  const { threadId } = useParams<{ threadId: string }>();
  const queryClient = useQueryClient();
  const toast = useToast();

  async function createReply(data: CreateReplyDTO) {
    const formData = new FormData();
    formData.append("content", data.content ?? "");
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    const response = await apiv1.post(`/thread/${threadId}/reply`, formData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    queryClient.invalidateQueries({ queryKey: ["reply-thread", threadId] });
    return response.data;
  }

  const { mutateAsync: createReplyAsync } = useMutation<
    CreateReplyDTO,
    Error,
    CreateReplyDTO
  >({
    mutationKey: ["createReply"],
    mutationFn: createReply,
  });
  async function onSubmit(data: CreateReplyFormInput) {
    const replyData: CreateReplyDTO = {
      content: data.content,
      image: data.image,
      threadId: Number(threadId),
    };

    const replyPromise = createReplyAsync(replyData);
    toast.promise(replyPromise, {
      loading: {
        title: "Replying",
        description: "Please wait...",
        duration: 3000,
        isClosable: true,
      },
      success: {
        title: "Replyed",
        description: "Succes Reply !",
        duration: 3000,
        isClosable: true,
      },
      error: {
        title: "Failed!",
        description: "Have some problem, try again later.",
        duration: 3000,
        isClosable: true,
      },
    });
    try {
      await replyPromise;
      queryClient.invalidateQueries({ queryKey: ["reply-thread"] });
      reset();
    } catch (error) {
      console.error("Error ", error);
    }
  }
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}

export function useDetailReplyForm(threadId: number | null) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateReplyFormInput>({
    resolver: zodResolver(replySchema),
  });
  const queryClient = useQueryClient();
  const toast = useToast();

  async function createReply(data: CreateReplyDTO) {
    const formData = new FormData();
    formData.append("content", data.content ?? "");
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    const response = await apiv1.post(`/thread/${threadId}/reply`, formData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    queryClient.invalidateQueries({ queryKey: ["reply-thread", threadId] });
    return response.data;
  }

  const { mutateAsync: createReplyAsync } = useMutation<
    CreateReplyDTO,
    Error,
    CreateReplyDTO
  >({
    mutationKey: ["createReply"],
    mutationFn: createReply,
  });
  async function onSubmit(data: CreateReplyFormInput) {
    const replyData: CreateReplyDTO = {
      content: data.content,
      image: data.image,
      threadId: Number(threadId),
    };
    const replyPromise = createReplyAsync(replyData);
    toast.promise(replyPromise, {
      loading: {
        title: "Replying",
        description: "Please wait...",
        duration: 3000,
        isClosable: true,
      },
      success: {
        title: "Replyed",
        description: "Succes Reply !",
        duration: 3000,
        isClosable: true,
      },
      error: {
        title: "Failed!",
        description: "Have some problem, try again later.",
        duration: 3000,
        isClosable: true,
      },
    });
    try {
      await replyPromise;
      queryClient.invalidateQueries({ queryKey: ["reply-thread"] });
      reset();
    } catch (error) {
      console.error("Error", error);
    }
  }
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
