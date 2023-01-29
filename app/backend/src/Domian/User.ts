import IUser from "../interfaces/IUser";

class User {
    private id?: string ;
    private password: string;
    private userName: string;

    constructor(

        user: IUser
    ){
        this.id = user.id;
        this.password = user.password;
        this.userName = user.userName;
    }

    // get id() {
    //     return this._id
    // }
  

    // get password() {
    //     return this._password
    // }

    // get userName() {
    //     return this._userName
    // }


    public getId() {
        return this.id
    }

    public getUserName () {
        return this.userName 
    }

  
}

export default User;