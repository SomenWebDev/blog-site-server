import userService from "./user.service.js";

const createUser = async (req, res) => {
  const userData = req.body;
  const user = await userService.CreateUserService(userData);
  res.status(201).json({
    success: true,
    data: user,
  });
};

const loginUser = async (req, res) => {
  const loginData = req.body;
  const result = await userService.loginUserService(loginData);
  res.status(201).json({
    success: true,
    data: result,
  });
};
const getUsers = async (req, res) => {
  console.log("I am get user");
};

export default {
  createUser,
  getUsers,
  loginUser,
};
