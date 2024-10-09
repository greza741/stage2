import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class followService {
  async updateFollow(currentUserId: number, targetUserId: number) {
    const follow = await prisma.follow.findFirst({
      where: {
        followerId: targetUserId,
        followingId: currentUserId,
      },
    });

    if (follow) {
      await prisma.follow.delete({
        where: { id: follow.id },
      });
      return { isFollowing: false };
    } else {
      await prisma.follow.create({
        data: {
          followerId: targetUserId,
          followingId: currentUserId,
          isFollowing: true,
        },
      });
      return { isFollowing: true };
    }
  }

  async getFollowStatus(currentUserId: number, targetUserId: number) {
    const follow = await prisma.follow.findFirst({
      where: {
        followerId: targetUserId,
        followingId: currentUserId,
      },
    });
    return { isFollowing: follow ? true : false };
  }
}

export default new followService();
