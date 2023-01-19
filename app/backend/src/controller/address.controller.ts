import { Request, Response } from "express";
import AddressService from '../service/address.service';
import IAdress from "../interfaces/IAdress";

class AddressCreate {
    private req: Request;
    private res: Response;
    private service: AddressService

    constructor(req: Request, res: Response){
        this.req = req,
        this.res = res,
        this.service = new AddressService()
    }

    public async createAdress(){
        const { type, message } = await this.service.newAddress(this.req.body)
        const address: IAdress = {
           city:  this.req.body.city,
           district: this.req.body.district,
           number: this.req.body.number,
           street: this.req.body.street,
           state: this.req.body.state,
        }
        const newAddress = await this.service.newAddress(address)
        return this.res.status(type).json(newAddress.message.allAddress)
    }

}

export default AddressCreate;