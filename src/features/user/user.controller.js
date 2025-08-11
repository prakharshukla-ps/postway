import jwt from "jsonwebtoken";
import UserModel from "./user.model.js";
import ApplicationError from "../../errorHandler/applicationError.js";

export default class UserController {
  userSignUp(req, res) {
    const { name, email, password } = req.body;

    const user = UserModel.userSignUp(name, email, password);

    res.status(201).send(user);
  }

  userLogin(req, res) {
    const { email, password } = req.body;

    const user = UserModel.userLogin(email, password);

    if (!user) {
      throw new ApplicationError("Incorrect credentials!", 400);
    } else {
      const token = jwt.sign({ userId: user.id }, "postaway2025", {
        expiresIn: "1h",
      });

      res.status(200).send(token);
    }
  }
}
