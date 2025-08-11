import express from "express";
import fileUpload from "../../middlewares/fileUpload.middleware.js";
import PostController from "./post.controller.js";

const postRouter = express.Router();

const postController = new PostController();

postRouter.get("/all", postController.getAllPosts);
postRouter.get("/:id", postController.getPostById);
postRouter.get("/", postController.getUserPosts);
postRouter.post(
  "/",
  fileUpload.single("imageUrl"),
  postController.createNewPost
);
postRouter.put(
  "/:id",
  fileUpload.single("imageUrl"),
  postController.updatePost
);
postRouter.delete("/:id", postController.deletePost);

export default postRouter;
