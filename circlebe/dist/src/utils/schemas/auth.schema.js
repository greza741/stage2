"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email(),
    password: joi_1.default.string(),
});
exports.registerSchema = joi_1.default.object({
    fullname: joi_1.default.string().min(3).max(100).required(),
    email: joi_1.default.string().email(),
    password: joi_1.default.string().min(4),
});
