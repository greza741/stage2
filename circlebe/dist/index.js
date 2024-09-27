"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const hello_controller_1 = require("./controllers/hello-controller");
const upload_file_1 = require("./middlewares/upload-file");
const error_1 = require("./middlewares/error");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", upload_file_1.UploadFile, hello_controller_1.HelloController);
app.use(error_1.errorHandler);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
