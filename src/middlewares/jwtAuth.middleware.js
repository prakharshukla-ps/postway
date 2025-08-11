import jwt from "jsonwebtoken";
import ApplicationError from "../errorHandler/applicationError.js";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    throw new ApplicationError("Unauthorized access!", 401);
  }

  const payload = jwt.verify(token, "postaway2025");
  req.userId = payload.userId;

  next();
};

export default jwtAuth;
