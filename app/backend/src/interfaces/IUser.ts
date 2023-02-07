interface IUserPassword {
    password: string
}

interface IUser extends IUserPassword {
    id?: string ,
    userName: string,
}

export interface IUserToken {
    id?: string ,
    userName: string,
}

export default IUser;