import { UserEntity } from "@/entities/user";
import { apiv2 } from "@/libs/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { profileScema } from "../auth/schemas/profile";

export function useSuggestion2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserEntity>({
    resolver: zodResolver(profileScema),
  });

  async function getSuggestion2() {
    const response = await apiv2.get<null, { data: UserEntity }>(
      "/suggestion2"
    );
    // const { data} = response;
    return response.data;
  }

  const { data, isLoading } = useQuery<UserEntity, Error, UserEntity>({
    queryKey: ["suggestion2"],
    queryFn: getSuggestion2,
  });


  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    data,
    isLoading,
  };
}
