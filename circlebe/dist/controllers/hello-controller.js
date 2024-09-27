"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = HelloController;
const hello_service_1 = require("../services/hello-service");
const bad_request_1 = __importDefault(require("../errors/bad-request"));
function HelloController(req, res) {
    const hello = (0, hello_service_1.SayHello)();
    const hello2 = (0, hello_service_1.SayHello2)();
    throw new bad_request_1.default({
        code: 501,
        message: "Name is required!",
        logging: true,
    });
    res.send(`${hello} ${hello2}`);
}
