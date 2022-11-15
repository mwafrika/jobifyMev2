import { Router } from "express";
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests for this API, Please try again after 15 minutes ",
});

const router = Router()
  .post("/register", apiLimiter, register)
  .post("/login", apiLimiter, login)
  .patch("/updateUser", authenticateUser, updateUser);

export default router;
