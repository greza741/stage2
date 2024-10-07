import { PrismaClient, Thread, User } from "@prisma/client";
import { CreateThreadDTO, UpdateThreadDTO } from "../dto/thread.dto";
import { CustomError, CustomErrorCode } from "../types/error";

const prisma = new PrismaClient();

class ThreadServices {
  async getAllThreads(): Promise<Thread[]> {
    return await prisma.thread.findMany({
      include: {
        author: true,
      },
    });
  }
  async getUserThread(user: User): Promise<Thread[]> {
    return await prisma.thread.findMany({
      where: {
        authorId: user.id,
      },
      include: {
        author: true,
      },
    });
  }

  async getThreadById(id: number): Promise<Thread | null> {
    const thread = await prisma.thread.findUnique({
      where: {
        id: id,
      },
      include: {
        like: true,
      },
    });
    if (!thread) {
      throw {
        status: 404,
        message: "Thread not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }
    return thread;
  }

  async createThread(
    data: CreateThreadDTO,
    user: User
  ): Promise<Thread | null> {
    if (!user) {
      throw {
        code: CustomErrorCode.USER_NOT_EXISTS,
        message: "User not found!",
        status: 404,
      } as CustomError;
    }

    return await prisma.thread.create({
      data: {
        ...data,
        authorId: user.id,
      },
    });
  }

  async updateThread(data: UpdateThreadDTO): Promise<Thread | null> {
    const thread = await prisma.thread.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!thread) {
      throw {
        status: 404,
        message: "Thread not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }

    if (data.content) {
      thread.content = data.content;
    }
    if (data.image) {
      thread.image = data.image;
    }

    return await prisma.thread.update({
      data: thread,
      where: { id: 2 },
    });
  }

  async deleteThread(id: number): Promise<Thread | null> {
    const thread = await prisma.thread.findUnique({
      where: {
        id: id,
      },
    });

    if (!thread) {
      throw {
        status: 404,
        message: "Thread not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }

    return await prisma.thread.delete({
      where: { id: id },
    });
  }
}

export default new ThreadServices();
