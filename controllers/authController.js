const register = (req, res) => {
  res.send({
    message: "register success",
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
