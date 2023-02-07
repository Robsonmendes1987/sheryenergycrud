import * as jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserToken } from "../interfaces/IUser";

export const createToken = (user: IUserToken) => {
  const token = jwt.sign({user}, `${process.env.TOKEN_SECRET}` as string, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
  return token;
};

export const validateToken = (token: string) => {
  if (!token) {
    return { type: 401, message: "Token not found" };
  }

  try {
    const data  = jwt.verify(token, `${process.env.TOKEN_SECRET}` as string)
    return { type: null, message: data };
  } catch (error) {
    return { type: 401, message: "Invalid token" };
  }
};

module.exports = { validateToken, createToken };

