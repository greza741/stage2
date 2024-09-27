"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerV1 = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user-controller"));
const auth_controller_1 = __importDefault(require("../controllers/auth-controller"));
const authentication_1 = require("../middlewares/authentication");
const authorization_1 = require("../middlewares/authorization");
const threads_controller_1 = __importDefault(require("../controllers/threads-controller"));
exports.routerV1 = express_1.default.Router();
exports.routerV1.get("/users", user_controller_1.default.find);
exports.routerV1.get("/users/:id", user_controller_1.default.findById);
exports.routerV1.get("/users/email/:email", user_controller_1.default.findByEmail);
exports.routerV1.post("/users", user_controller_1.default.create);
exports.routerV1.patch("/users", user_controller_1.default.update);
exports.routerV1.delete("/users/:id", user_controller_1.default.delete);
exports.routerV1.get("/threads", threads_controller_1.default.find);
exports.routerV1.get("/threads/:id", threads_controller_1.default.findById);
exports.routerV1.post("/threads", threads_controller_1.default.create);
exports.routerV1.patch("/threads", threads_controller_1.default.update);
exports.routerV1.delete("/threads/:id", threads_controller_1.default.delete);
// routerV1.get("/profile", authentication, profileController)
exports.routerV1.post("/auth/login", auth_controller_1.default.login);
exports.routerV1.post("/auth/register", auth_controller_1.default.register);
exports.routerV1.get("/auth/check", authentication_1.authentication, auth_controller_1.default.check);
exports.routerV1.get("/dashboard", authentication_1.authentication, (0, authorization_1.authorize)("ADMIN"), (req, res) => {
    res.json({ message: "Hello from dashboard!" });
});
