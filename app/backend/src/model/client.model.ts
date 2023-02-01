import { object } from "joi";
import { Schema, Model, model, models, Mongoose, UpdateQuery, isValidObjectId  } from "mongoose";
import IClient from "../interfaces/IClient";

class ClientCreate {
    private schema: Schema;
    private model: Model<IClient>

    constructor(){
        this.schema = new Schema<IClient>({
            name: {type: String, required: true},
            email: {type: String, required: true},
            telefone:{type: Number, required: true},
            cpf: {type: String, required: true},
            // address: {
            //     street: {type: String, required: true},
            //     district: {type: String, required: true},
            //     number: {type: String, required: true},
            //     city: {type: String, required: true},
            //     state: {type: String, required: true},
            // }
        });
        this.model = models.Client || model('Client', this.schema)
    }
    public async createCliente(cliente: IClient): Promise<IClient>{
        return this.model.create({...cliente})
    }

    public async updateCliente(_id: string, cliente:Partial<IClient>): Promise<any> {
        // if(! isValidObjectId(_id)){
        //   return 'Invalid MongoId';
        // }
        return this.model.findByIdAndUpdate(
        {_id},
        {...cliente},
        {new: true}
        )
    }

    public async readOne(_id: string): Promise<IClient | null>{
        if(! isValidObjectId(_id)) throw Error('Invalid MongoId');
        return this.model.findById({_id})
    }

    public async deletCliente(_id: string): Promise<IClient | null>{
        return this.model.findByIdAndDelete({_id})
    }

    public async getAllCliente(){
        return this.model.find({})
    }

    public async getOneCliente(_id: string){
        return this.model.findById({_id})
    }

}
export default ClientCreate;