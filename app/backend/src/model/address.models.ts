import { Schema, Model, model, models } from 'mongoose'
import IAdress from '../interfaces/IAdress'

class AddressCreate {
    private schema: Schema;
    private model: Model<IAdress>;
    
    constructor(){
        this.schema = new Schema<IAdress>({
            street: {type: String, required: true},
            number: {type: Number, required: true},
            district: {type: String, required: true},
            city: {type: String, required: true},
            state: {type: String, required: true},
        });
        this.model = models.Address || model('Address', this.schema)
    }
     public async createAddress(address: IAdress): Promise<IAdress>{
        return this.model.create({...address})
     }
}

export default AddressCreate