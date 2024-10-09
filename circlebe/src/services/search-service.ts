import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchService = async (query: string, userId: number) => {
  if (!query) {
    return [];
  }
  return await prisma.user.findMany({
    where: {
      AND: [
        { id: { not: userId } },
        {
          OR: [
            { username: { contains: query, mode: `insensitive` } },
            { fullname: { contains: query, mode: `insensitive` } },
          ],
        },
      ],
    },
    select: {
      id: true,
      email: true,
      fullname: true,
      username: true,
      profile: true,
    },
  });
};
