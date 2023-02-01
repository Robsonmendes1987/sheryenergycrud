import IAdress from "../interfaces/IAdress";
class Client {
    private id: string  | undefined;
    private name: string;
    private email: string;
    private telefone: number;
    private cpf: string;
    // private address: object;

    constructor(
        id: string  | undefined,
        name: string,
        email: string,
        telefone: number,
        cpf: string,
        // address: object,

    ) {
        this.id = id,
        this.email = email,
        this.name = name,
        this.telefone = telefone,
        this.cpf = cpf
        // this.address = address
    }

    public setId (id: string) {
        this.id = id;
    }
    
    // public setaddress (address: object) {
    //     this.address = address;
    // }

    // public getaddress () {
    //     return this.name;
    // }

    public setname (name: string) {
        this.name = name;
    }

    public getname () {
        return this.name;
    }

    public setemail(email: string) {
        this.email = email;
    }

    public getemail () {
        return this.email;
    }

    public setTelefone(telefone: number) {
        this.telefone = telefone;
    }

    public getTelefone () {
        return this.telefone;
    }


    public setCpf (cpf: string) {
        this.cpf = cpf;
    }

    public getCpf () {
        return this.cpf;
    }
    }
    export default Client