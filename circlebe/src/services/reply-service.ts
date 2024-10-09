import { PrismaClient, Reply } from "@prisma/client";
import { CustomError, CustomErrorCode } from "../types/error";
import { ReplyDTO, UpdateReplyDTO } from "../dto/reply.dto";

const prisma = new PrismaClient();
class replySevices {
  async getReplyByPost(threadId: number): Promise<Reply[]> {
    return await prisma.reply.findMany({
      where: { threadId },
      include: {
        author: {
          select: {
            fullname: true,
            username: true,
            profile: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async createReply(
    data: ReplyDTO,
    authorId: number,
    threadId: number
  ): Promise<Reply | null> {
    const newReply = await prisma.reply.create({
      data: {
        content: data.content,
        image: data.image || null,
        threadId,
        authorId,
      },
    });
    const replyCount = await prisma.reply.count({
      where: { threadId },
    });
    await prisma.thread.update({
      where: { id: threadId },
      data: { repliesCount: replyCount },
    });
    return newReply;
  }
  async updateReply(data: UpdateReplyDTO): Promise<Reply | null> {
    const reply = await prisma.reply.findUnique({
      where: {
        id: data.id,
      },
    });
    const update: Partial<Reply> = {};

    if (reply && data.content) {
      reply.content = data.content;
    }
    if (reply && data.image) {
      reply.image = data.image;
    }
    return await prisma.reply.update({
      data: update,
      where: { id: data.id },
    });
  }
  async deleteReply(id: number): Promise<Reply | null> {
    const reply = await prisma.reply.findUnique({
      where: { id },
    });

    if (!reply) {
      throw {
        status: 404,
        message: "Reply not found",
        code: CustomErrorCode.REPLY_NOT_FOUND,
      } as CustomError;
    }
    await prisma.reply.delete({
      where: { id },
    });
    const replyCount = await prisma.reply.count({
      where: { threadId: reply.threadId },
    });
    await prisma.thread.update({
      where: { id: reply.threadId },
      data: { repliesCount: replyCount },
    });
    return reply;
  }
}

export default new replySevices();
