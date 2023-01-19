// import User from "../model/user"
import User from "../Domian/User";
import IUser, { IUserToken } from "../interfaces/IUser";
import userCreateModel from "../model/user.model";
import { createToken } from "../utils/jwt.utils";

class userCreate {
  private freame = new userCreateModel();
  private createUser(user: IUser | null): User | null {
    if (user) {
      return new User(user);
    }

    return null;
  }


  public async newUser(user: IUser) {
    const newuserData = await this.freame.createUser(user);

    const userData =  this.createUser(newuserData)
    const { password, ...notPassword } = userData as unknown as IUser;
    console.log("USER SEVICE",  userData );
    const newToken = createToken(notPassword as IUserToken);

    return { type: 200, message: newToken };
  }

  public async findOneUser(_id: string) {
    const newuserName = new userCreateModel();
    const result = await newuserName.findUser(_id);
    return { type: 200, message: result };
  }
}

export default userCreate;
