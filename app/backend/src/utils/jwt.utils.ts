import * as jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserToken } from "../interfaces/IUser";

const createToken = (user: IUserToken) => {
  const token = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "id",
    algorithm: "HS256",
  });
  return token;
};

const validateToken = (token: string) => {
  if (!token) {
    return { type: 401, message: "Token not found" };
  }

  try {
    const data  = jwt.verify(token, process.env.JWT_SECRET as string)
    return { type: null, message: data };
  } catch (error) {
    return { type: 401, message: "Invalid token" };
  }
};

export { validateToken, createToken };
