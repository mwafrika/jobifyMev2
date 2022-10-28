import { Router } from "express";
import { register, login, updateUser } from "../controllers/authController.js";

const router = Router()
  .post("/register", register)
  .post("/login", login)
  .patch("/updateUser", updateUser);

export default router;
