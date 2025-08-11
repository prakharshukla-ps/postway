import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signUp", userController.userSignUp);
userRouter.post("/signIn", userController.userLogin);

export default userRouter;
