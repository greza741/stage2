export type ReplyDTO = {
  image?: string;
  content?: string;
  threadId: number;
  authorId: number;
};

export type UpdateReplyDTO = {
  id: number;
  content?: string;
  image?: string;
};
