import { UserEntity } from "@/entities/user";

export type LoginRequestDTO = {
  email: string;
  password: string;
};

export type LoginResponseDTO = {
  user: UserEntity;
  token: string
};

export type RegisterRequestDTO = {
  email: string;
  fullname: string;
  password: string;
};

export type RegisterResponseDTO = LoginResponseDTO

export type UserStoreDTO = Omit<UserEntity, "password">