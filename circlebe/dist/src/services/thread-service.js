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
class ThreadServices {
    getAllThreads() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.thread.findMany({
                include: {
                    user: true
                }
            });
        });
    }
    getThreadById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const thread = yield prisma.thread.findUnique({
                where: {
                    id: id,
                },
            });
            if (!thread) {
                throw {
                    status: 404,
                    message: "Thread not found!",
                    code: error_1.CustomErrorCode.USER_NOT_EXISTS,
                };
            }
            return thread;
        });
    }
    createThread(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.thread.create({
                data: Object.assign(Object.assign({}, data), { userId: 4 }),
            });
        });
    }
    updateThread(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const thread = yield prisma.thread.findUnique({
                where: {
                    id: data.id
                },
            });
            if (!thread) {
                throw {
                    status: 404,
                    message: "Thread not found!",
                    code: error_1.CustomErrorCode.USER_NOT_EXISTS,
                };
            }
            if (data.content) {
                thread.content = data.content;
            }
            if (data.image) {
                thread.image = data.image;
            }
            return yield prisma.thread.update({
                data: thread,
                where: { id: 2 },
            });
        });
    }
    deleteThread(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const thread = yield prisma.thread.findUnique({
                where: {
                    id: id,
                },
            });
            if (!thread) {
                throw {
                    status: 404,
                    message: "Thread not found!",
                    code: error_1.CustomErrorCode.USER_NOT_EXISTS,
                };
            }
            return yield prisma.thread.delete({
                where: { id: id },
            });
        });
    }
}
exports.default = new ThreadServices();
