import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import User from "./db";

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  const user = User.findOne({ token: req.token });
  if (!authHeader || !authHeader.startWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({});
  }
}
