import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    user,
  });
};

const login = (req, res) => {
  res.send({
    message: "login success",
  });
};

const updateUser = (req, res) => {
  res.send({
    message: "update success",
  });
};

export { register, login, updateUser };
