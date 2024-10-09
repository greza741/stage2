import cloudinaryService from "../services/cloudinary-service";
import replyService from "../services/reply-service";
import { RequestWithUser } from "../types/like";
import { Response } from "express";
import { replySchema } from "../utils/schemas/reply.schema";

class replyControllers {
  async getReplyByPost(req: RequestWithUser, res: Response) {
    const threadId = Number(req.params.threadId);
    const reply = await replyService.getReplyByPost(threadId);
    const threadReply = reply.map((reply) => ({
      ...reply,
    }));
    res.json(threadReply);
  }

  async createReply(req: RequestWithUser, res: Response) {
    const threadId = Number(req.params.threadId);
    let imageUrl: string | undefined;
    if (req.file) {
      const image = await cloudinaryService.uploadSingle(req.file);
      imageUrl = image.secure_url;
    }
    const body = { ...req.body, ...(imageUrl && { image: imageUrl }) };
    const value = await replySchema.validateAsync(body);
    const createReply = await replyService.createReply(
      value,
      req.user.id,
      threadId
    );
    res.json(createReply);
  }

  async updateReply(req: RequestWithUser, res: Response) {
    const id = Number(req.params.id);
    const deleteReply = await replyService.deleteReply(id);
    res.json(deleteReply);
  }
}

export default new replyControllers();
