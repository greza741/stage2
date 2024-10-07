import { Request } from "express";

export interface RequestLike {
  userId: number;
  threadId: number;
}

export interface RequestLikeWithUser extends Request {
  user?: any;
  file?: Express.Multer.File;
}
