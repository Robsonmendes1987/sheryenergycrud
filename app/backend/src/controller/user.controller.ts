import {Request, Response } from "express"
import userCreateService from "../service/user.service"
import IUser from "../interfaces/IUser";
// import  createToken  from "../utils/jwt.utils";

class userController {
    private req: Request;
    private res: Response;
    private service : userCreateService;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
        this.service = new userCreateService();
    }

    public async  createUser() {
        const {type, message} = await this.service.newUser(this.req.body)
        // const user: IUser = {
        //     userName: this.req.body.userName,
        //     password: this.req.body.password,
        //         }
                this.res.status(type).json(message)
    }

    public async  findOne() {
        const {type, message} = await this.service.findOneUser(this.req.body, this.req.body)
        if(type) {
            return this.res.status(type).json(message)
        }
                this.res.status(type).json(message)
    }
} 
export default userController