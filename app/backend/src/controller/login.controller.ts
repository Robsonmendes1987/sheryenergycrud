// import { Request, Response } from "express";
// import { valid } from "joi";
// import ILogin from "../interfaces/ILogin";
// import LoginUser from '../service/login.service' 

// export default class LoginController {
//     private req: Request;
//     private res: Response;
//     private service: LoginUser

//     constructor(req: Request, res: Response){
//         this.req = req,
//         this.res = res,
//         this.service = new LoginUser()
//     }
  
//     async login() {
//       const { type, message } = await this.service.login(this.req.body);
//       if (type === 200) {
//         return this.res.status(type).json(message);
//       }
//       this.res.status(type).json( {message} );
//     }
  
//     // async validate() {
//     //   const authorization = this.req.header('authorization') as string;
//     //   const { type, message} = await this.service.validateUser(authorization);
//     //   this.res.status(type).json({message});
//     // }
//   }