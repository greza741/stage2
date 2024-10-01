import { PrismaClient, User } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import { CustomError, CustomErrorCode } from "../types/error";

const prisma = new PrismaClient();

class UserSuggestion2 {
  async getAllUsers(): Promise<User[]> {
    return [
      {
        fullname: "fullname1",
        username: "test",
        bio: "test",
        id: 1,
        profile: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: "test",
        bgImage: "test",
        password: "test",
        role: "ADMIN",
      },
      {
        fullname: "test1",
        username: "test1",
        bio: "test1",
        id: 1,
        profile: "test1",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: "test1",
        bgImage: "test1",
        password: "test1",
        role: "ADMIN",
      },
      {
        fullname: "test2",
        username: "test2",
        bio: "test2",
        id: 1,
        profile: "test2",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: "test2",
        bgImage: "test2",
        password: "test2",
        role: "ADMIN",
      },
    ];
  }

  async getUserById(userId: number): Promise<Omit<User, "password"> | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        fullname: true,
        username: true,
        bio: true,
        bgImage: true,
        profile: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        id: true,
        role: true,
      },
    });
    if (!user) {
      throw {
        status: 404,
        message: "User not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async createUser(data: CreateUserDTO): Promise<User | null> {
    return await prisma.user.create({ data });
  }

  async updateUser(
    data: UpdateUserDTO,
    userId: number
  ): Promise<{
    user: Pick<User, "fullname" | "username" | "bio" | "id" | "profile">;
  }> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw {
        status: 404,
        message: "User not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }
    const updatedData: Partial<
      Pick<User, "fullname" | "username" | "bio" | "profile">
    > = {};

    if (data.fullname) updatedData.fullname = data.fullname;

    if (data.username) updatedData.username = data.username;

    if (data.profile) {
      updatedData.profile = data.profile;
    }

    // if (data.password) {
    //   const saltRounds = 10;
    //   updatedData.password = await bcrypt.hash(data.password, saltRounds);
    // }

    if (data.bio) updatedData.bio = data.bio;

    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: updatedData,
      select: {
        id: true,
        fullname: true,
        username: true,
        bio: true,
        profile: true,
      },
    });
    return { user: updateUser };
  }

  async deleteUser(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw {
        status: 404,
        message: "User not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }

    return await prisma.user.delete({
      where: { id: id },
    });
  }
}

export default new UserSuggestion2();
