import express from "express";
import swagger from "swagger-ui-express";
import ApplicationError from "./src/errorHandler/applicationError.js";
import commentRouter from "./src/features/comment/comment.routes.js";
import likeRouter from "./src/features/like/like.routes.js";
import postRouter from "./src/features/post/post.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import apiDocs from "./swagger.json" with { type: "json" };

const server = express();

server.use(express.json());

server.use(loggerMiddleware);

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

server.use("/api", userRouter);
server.use("/api/posts", jwtAuth, postRouter);
server.use("/api/comments", jwtAuth, commentRouter);
server.use("/api/likes", jwtAuth, likeRouter);

server.get("/", (req, res) => res.status(200).send("Welcome to POSTAWAY"));

server.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status(err.code).send(err.message);
  }

  console.log(err);

  res.status(500).send("Something went wrong!");
});

server.use((req, res) => res.status(404).send("API not found!"));

server.listen(3000, () => console.log("Server is listening at port 3000"));
