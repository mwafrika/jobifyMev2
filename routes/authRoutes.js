import { Router } from "express";
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

const router = Router()
  .post("/register", register)
  .post("/login", login)
  .patch("/updateUser", authenticateUser, updateUser);

export default router;
