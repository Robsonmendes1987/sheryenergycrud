// import User from "../model/user"
import User from "../Domian/User";
import IUser, { IUserToken } from "../interfaces/IUser";
import userCreateModel from "../model/user.model";
import  {createToken} from "../utils/jwt.utils";
import userValidate from "../validations/user.validation";

class userCreate {
  private freame = new userCreateModel();
  private createUser(user: IUser | null): User | null {
    if (user) {
      return new User(user);
    }

    return null;
  }


  public async newUser(user: IUser) {
    const existsUser = await this.freame.findUser(user.userName, user.password)
    if(existsUser){
      return {type: 409, message: "User already registered" }
    }
    const newuserData = await this.freame.createUser(user);
    
    const userData =  this.createUser(newuserData)
    // const {type, message} = userValidate(data)
    // if(type) return {type, message}
    const { password, ...notPassword } = userData as unknown as IUser;
    const newToken = createToken(notPassword as IUserToken);
    
    console.log("USER SEVICE",  newToken );
    return { type: 200, message: {newToken} };
  }

  public async findOneUser( userName: string, password: string) {
    const newuserName = new userCreateModel();
    const result = await newuserName.findUser(userName, password);
    if(!result || !result.password) {
      return {type: 401, message: 'userName or password not found'}
    }
    return { type: 200, message: result };
  }
}

export default userCreate;
