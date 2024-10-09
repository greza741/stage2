import { CreateReplyEntity } from "@/entities/reply-entity";

export type CreateReplyDTO = Pick<CreateReplyEntity, "content" | "image"> & {
  threadId: number;
};
export type ReplyDTO = CreateReplyEntity;
