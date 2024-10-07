import { Request } from "express";

export interface RequestThread extends Request {
  user?: any;
  file?: Express.Multer.File;
}
