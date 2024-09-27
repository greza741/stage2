"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const error_1 = require("../types/error");
const prisma = new client_1.PrismaClient();
class UserServices {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findMany();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: id
                }
            });
            if (!user) {
                throw {
                    status: 404,
                    message: "User not found!",
                    code: error_1.CustomErrorCode.USER_NOT_EXISTS
                };
            }
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findUnique({
                where: {
                    email: email
                }
            });
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.create({ data });
        });
    }
    updateUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: 2 // ambil data id dari token
                }
            });
            if (!user) {
                throw {
                    status: 404,
                    message: "User not found!",
                    code: error_1.CustomErrorCode.USER_NOT_EXISTS
                };
            }
            if (data.fullname) {
                user.fullname = data.fullname;
            }
            if (data.password) {
                user.password = data.password;
            }
            return yield prisma.user.update({
                data: user,
                where: { id: 2 }
            });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: id
                }
            });
            if (!user) {
                throw {
                    status: 404,
                    message: "User not found!",
                    code: error_1.CustomErrorCode.USER_NOT_EXISTS
                };
            }
            return yield prisma.user.delete({
                where: { id: id }
            });
        });
    }
}
exports.default = new UserServices();
