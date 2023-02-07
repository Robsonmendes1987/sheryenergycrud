import {  Schema, model, Model, models, UpdateQuery, isValidObjectId } from "mongoose";
import IUser from "../interfaces/IUser";

class userCreate {
    
    private schema: Schema;
    private model: Model<IUser>;

    constructor() {
        this.schema = new Schema<IUser>({
            userName: {type: String, required: true}, 
            password: {type: String, required: true}
        });
        this.model = models.User || model('User', this.schema)
    }
    public async createUser(user: IUser): Promise<IUser> {
        return this.model.create({ ...user})
    }

    public async findUser(userName: string, password: string): Promise<IUser | null>{
        return this.model.findOne({userName, password});
    }


}

{
    
}
export default  userCreate
