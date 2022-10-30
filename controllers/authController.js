import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    status: "success",
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
    location: user.location,
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
