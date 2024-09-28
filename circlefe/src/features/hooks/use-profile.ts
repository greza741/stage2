import { UserEntity } from "@/entities/user";
import { apiv1 } from "@/libs/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CreateProfileFormInputs, profileScema } from "../auth/schemas/profile";
import { ProfileDTO } from "../auth/types/dto";
import Cookies from "js-cookie";

export function useProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileDTO>({
    resolver: zodResolver(profileScema),
  });

  async function getProfile() {
    const response = await apiv1.get<null, { data: UserEntity }>(
      "/users/id",
      {
        headers: {
           Authorization: `Bearer ${Cookies.get("token")}`,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<UserEntity, Error, UserEntity>({
    queryKey: ["user"],
    queryFn: getProfile,
  });

  const queryClient = useQueryClient();

  async function editProfile(data: ProfileDTO) {
// const formData = new FormData()
// formData.append("fullname", data.fullname)
// formData.append("username", data.username)
// formData.append("bio", data.bio)
// formData.append("profile", data.profile[0])
// formData.append("bgImage", data.bgImage[0])
    const response = await apiv1.put<null, { data: UserEntity }>(
      "/users",
      data,
      {headers:{
        Authorization: `Bearer ${Cookies.get("token")}`
      }}
    );

    queryClient.invalidateQueries({ queryKey: ["user"] });

    return response.data;
  }

  const { mutateAsync: ProfileAsync } = useMutation<
   ProfileDTO,
    Error,
   ProfileDTO
  >({
    mutationKey: ["editProfile"],
    mutationFn: editProfile,
  });

  async function onSubmit(data: CreateProfileFormInputs) {
   try {
    await ProfileAsync(data);

    alert("Profile berhasil diedit!");
  }catch (error) {
    console.error("Failed to edit profile:", error);
    alert("Terjadi kesalahan saat mengedit profil.");
  }
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
