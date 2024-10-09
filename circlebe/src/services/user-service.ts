import { PrismaClient, Thread, User } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import { CustomError, CustomErrorCode } from "../types/error";
import bcrypt from "bcrypt"; // Import bcrypt

const prisma = new PrismaClient();

class UserServices {
  async getAllUsers(): Promise<User[]> {
    return await prisma.user.findMany();
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
        followers: true,
        following: true,
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
    user: Pick<
      User,
      "fullname" | "username" | "bio" | "id" | "profile" | "bgImage"
    >;
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
    const updatedData: Partial<UpdateUserDTO> = {};

    if (data.fullname) updatedData.fullname = data.fullname;

    if (data.username) updatedData.username = data.username;

    if (data.profile) {
      updatedData.profile = data.profile;
    }

    if (data.bgImage) {
      updatedData.bgImage = data.bgImage;
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
        bgImage: true,
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

export default new UserServices();
