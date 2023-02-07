import { Request, Response } from "express";
import { valid } from "joi";
import ILogin from "../interfaces/ILogin";
import LoginUser from "../service/login.service";
import userValidate from "../validations/user.validation";

export default class LoginController {
  private req: Request;
  private res: Response;
  private service: LoginUser;

  constructor(req: Request, res: Response) {
    this.req = req, 
    this.res = res, 
    this.service = new LoginUser();
  }

  public async login() {
    const { type, message } = userValidate(this.req.body);
    if (type) {
      return this.res.status(type).json(message);
    }
    const token = await this.service.login(this.req.body);
    if (token.type) return this.res.status(token.type).json(token.message);
    this.res.status(200).json({token});
  }

}
