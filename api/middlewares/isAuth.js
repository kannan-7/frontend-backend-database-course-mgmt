import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function isAuth(req, res, next) {
  const headers = req.headers;
  const token = headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = {
    student_id: decoded.student_id,
    email: decoded.email,
    username: decoded.username,
    exp: decoded.exp,
  };
  next();
}

export default isAuth;
