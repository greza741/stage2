// import { PrismaClient, Thread, User } from "@prisma/client";
// import { CreateThreadDTO, UpdateThreadDTO } from "../dto/thread.dto";
// import { CustomError, CustomErrorCode } from "../types/error";
// import { RequestLike, RequestLikeWithUser } from "../types/like";

// const prisma = new PrismaClient();

// class LikeServices {
//   async likePost(req: RequestLikeWithUser) {
//     const checkLike = await prisma.like.findUnique({
//       where: {
//         userId_threadId: { threadId, userId },
//       },
//     });
//     if (checkLike) {
//       await prisma.like.delete({
//         where: { id: checkLike.id },
//       });
//       await prisma.thread.update({
//         where: { id: threadId },
//         data: { likesCount: { decrement: 1 } },
//       });
//       return { message: "Unlike" };
//     } else {
//       await prisma.like.create({
//         data: { threadId: data.threadId, userId: data.userId },
//       });
//       await prisma.thread.update({
//         where: { id: data.threadId },
//         data: { likesCount: { increment: 1 } },
//       });
//       return { message: "Liked" };
//     }
//   }
// }

// export default new LikeServices();
