import { ThreadEntity } from "./thread-entity";

export interface UserEntity {
  id: number;
  fullname: string;
  username: string;
  email: string;
  image: string;
  passwrod: string;
  bio: string;
  thread: ThreadEntity;
  profile: string;
  bgImage: string;
  followers: [];
  following: [];
  role: string;
  createdAt: Date;
  updateAt: Date;
}
