import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import { RequestWithUser } from "../types/like";

const prisma = new PrismaClient();

class likeController {
  async getLikes(req: RequestWithUser, res: Response) {
    const threadId = parseInt(req.params.threadId);
    const userId = req.user.id;
    const thread = await prisma.thread.findUnique({
      where: { id: threadId },
      include: {
        like: {
          where: { userId },
        },
      },
    });
    if (!thread) {
      return Error("Thread not found");
    }
    const isLiked = thread.like && thread.like.length > 0;
    const likesCount = thread.like ? thread.like.length : 0;
    res.json({ isLiked, likesCount });
  }

  async likePost(req: RequestWithUser, res: Response) {
    const threadId = parseInt(req.params.threadId);
    const userId = req.user.id;
    const checkLike = await prisma.like.findUnique({
      where: { userId_threadId: { threadId, userId } },
    });
    if (checkLike) {
      await prisma.like.delete({
        where: { id: checkLike.id },
      });
      await prisma.thread.update({
        where: { id: threadId },
        data: { likesCount: { decrement: 1 } },
      });
      return res.json({ message: "Like removed" });
    } else {
      await prisma.like.create({
        data: { threadId, userId },
      });
      await prisma.thread.update({
        where: { id: threadId },
        data: { likesCount: { increment: 1 } },
      });
      return res.json({ message: "Like added" });
    }
  }
}

export default new likeController();
