import { PrismaClient } from "@prisma/client";
import { RequestWithUser } from "../types/like";
import followService from "../services/follow-service";
import { Response } from "express";

const prisma = new PrismaClient();

class FollowController {
  async toggleFollow(req: RequestWithUser, res: Response) {
    const currentUserId = req.user.id;
    const targetUserId = parseInt(req.params.userId);
    const followStatus = await followService.updateFollow(
      currentUserId,
      targetUserId
    );
    return res.json(followStatus);
  }
  async checkFollowStatus(req: RequestWithUser, res: Response) {
    const currentUserId = req.user.id;
    const targetUserId = parseInt(req.params.userId);
    const followStatus = await followService.getFollowStatus(
      currentUserId,
      targetUserId
    );
    return res.json(followStatus);
  }

  async followList(req: RequestWithUser, res: Response) {
    const userId = req.user.id;
    const followList = await followService.followList(userId);
    return res.json(followList);
  }
}

export default new FollowController();
