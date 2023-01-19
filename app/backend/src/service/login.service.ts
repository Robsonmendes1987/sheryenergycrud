
// import ILogin from "../interfaces/ILogin";
// import { createToken, validateToken } from "../utils/jwt.utils";
// import User from '../model/user.model'
// import IUser from "../interfaces/IUser";

//       class LoginUser   {
//     public async  login (body: ILogin){
//     const getUser = new User()
//     // const user = await getUser.findUser( _id )

//     if(!user?.userName || user?.password !== body.password) {
//         return { type: 401, message:  'Incorrect email or password'}
//     }
//     const token = createToken(user.id as string);
//     return { type: 200, message: {token} }
// }


// public async validateUser  (token: string){
//     const { type, message }  = validateToken(token);
//     if(type) return {type, message}
//     const getUser = new User()
//     // const user = await getUser.findUser({userName: ''})
//     console.log(user)
//     return {type: 200, message: user}
//     // const {message: id} = validateToken(userWithoutPassword)
// } 
// }
// export default LoginUser


