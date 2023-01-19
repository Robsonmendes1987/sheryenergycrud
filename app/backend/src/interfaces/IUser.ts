interface IUserPassword {
    password: string
}

interface IUser extends IUserPassword {
    id?: string ,
    userName: string,
}

export interface IUserToken {
    userName: string,
    id: string ,
}

export default IUser;