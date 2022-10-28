import User from "../models/User.js";

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
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
