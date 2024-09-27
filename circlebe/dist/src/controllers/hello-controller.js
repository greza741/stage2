"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = HelloController;
const hello_service_1 = require("../services/hello-service");
const error_1 = require("../types/error");
function HelloController(req, res) {
    const hello = (0, hello_service_1.SayHello)();
    const hello2 = (0, hello_service_1.SayHello2)();
    throw {
        status: 404,
        message: "User not found!",
        code: error_1.CustomErrorCode.USER_NOT_EXISTS
    };
    res.send(`${hello} ${hello2}`);
}
