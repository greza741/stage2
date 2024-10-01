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
  username: string;
  password: string;
};

export type RegisterResponseDTO = LoginResponseDTO

export type UserStoreDTO = Omit<UserEntity, "password">

export type ProfileDTO = {
  fullname: string;
  username: string;
  bio: string;
  profile: FileList;
  bgImage: FileList;
}