import express, { Request, Response } from "express";
import authController from "../controllers/auth-controller";
import threadsController from "../controllers/threads-controller";
import userController from "../controllers/user-controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorization";
import { uploadDisk } from "../middlewares/upload-file";
import likeController from "../controllers/like-controller";
import { searchController } from "../controllers/search-controller";
import followController from "../controllers/follow-controller";
import replyController from "../controllers/reply-controller";

export const routerV1 = express.Router();

routerV1.get("/users", authentication, userController.find);
routerV1.get("/users/:id", authentication, userController.findById);
routerV1.get("/users/email/:email", userController.findByEmail);
routerV1.post("/users", userController.create);
routerV1.put(
  "/users",
  authentication,
  uploadDisk.single("image"),
  userController.update
);
routerV1.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful" });
});

routerV1.get("/threads", authentication, threadsController.find);
routerV1.get("/threads/:id", authentication, threadsController.findById);
// routerV1.get("/threads/:id",authentication, threadsController.findByUser)
routerV1.post(
  "/threads",
  authentication,
  uploadDisk.single("image"),
  threadsController.create
);
routerV1.patch("/threads", authentication, threadsController.update);
routerV1.delete("/threads/:id", authentication, threadsController.delete);

// Like
routerV1.post(
  "/thread/:threadId/like",
  authentication,
  likeController.likePost
);
routerV1.get("/thread/:threadId/like", authentication, likeController.getLikes);

// Search
routerV1.get("/search", authentication, searchController);

// Follows
routerV1.get(
  "/follow/:userId",
  authentication,
  followController.checkFollowStatus
);
routerV1.patch(
  "/follow/:userId",
  authentication,
  followController.toggleFollow
);
routerV1.get("/follow", authentication, followController.followList);

// reply
routerV1.get(
  "/thread/:threadId/reply",
  authentication,
  replyController.getReplyByPost
);
routerV1.post(
  "/thread/:threadId/reply",
  authentication,
  replyController.createReply
);

// routerV1.get("/profile", authentication, profileController)

routerV1.post("/auth/login", authController.login);
routerV1.post("/auth/register", authController.register);
routerV1.get("/auth/check", authentication, authController.check);

routerV1.get("/dashboard", authentication, authorize("ADMIN"), (req, res) => {
  res.json({ message: "Hello from dashboard!" });
});
