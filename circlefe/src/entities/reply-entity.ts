import { ThreadEntity } from "./thread-entity";
import { UserEntity } from "./user-entity";

export interface ReplyEntity {
  id: number;
  content?: string;
  image?: string;
  likesCount?: number;
  repliesCount?: number;
  createdAt: Date;
  updatedAt: Date;
  threadId: number;
  thread: ThreadEntity;
  author: Omit<UserEntity, "password">;
}

export interface CreateReplyEntity {
  id: number;
  content?: string;
  image?: FileList;
  likesCount?: number;
  repliesCount?: number;
  createdAt: Date;
  updatedAt: Date;
  threadId: number;
  thread: ThreadEntity;
  author: Omit<UserEntity, "password">;
}
