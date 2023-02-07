import ILogin from "../interfaces/ILogin";
import { createToken} from "../utils/jwt.utils";
import User from "../model/user.model";
import IUser from "../interfaces/IUser";
import userValidate from "../validations/user.validation";

class LoginUser {
  private getUser = new User();
  public async login({userName, password}: IUser ) {
    const user = await this.getUser.findUser(userName, password);

    if (!user || !user.password) {
      return { type: 401, message:  {message:"Incorrect email or password"}};
    }
    const { password: _, ...notPassword } = user;
    const token = createToken(notPassword);
    return { type: 200, message: { token } };
  }

}
export default LoginUser;
