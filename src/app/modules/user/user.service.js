import { createToken } from "../../../helpers/jwtHelpers.js";
import User from "./user.model.js";

const CreateUserService = async (userData) => {
  const user = await User.create(userData);

  return user;
};
const loginUserService = async (loginData) => {
  console.log(loginData);
  const user = await User.findOne({ email: loginData.email });
  if (!user) {
    throw new Error("User does not exist");
  }
  if (user.password !== loginData.password) {
    throw new Error("Incorrect password");
  }
  const { email, role } = user;
  const accessToken = createToken(
    { email, role },
    process.env.JWT_SECRET,
    "1d"
  );
  return {
    accessToken,
  };
};

export default {
  CreateUserService,
  loginUserService,
};
