import { Request, Response } from "express";
import IClaient from "../interfaces/IClient";
import ClienteService from '../service/client.service'

class createCliente {
    private req: Request;
    private res: Response;
    private service: ClienteService

    constructor(req: Request, res: Response){
        this.req = req,
        this.res = res,
        this.service = new ClienteService()
    }

   public async createClient(){
    const {type, message} = await this.service.crateCLiente(this.req.body)

    return this.res.status(type).json(message)

    }

    public async readOne(_id: string){
        const {type, message} = await this.service.readOne(_id)
        this.res.status(type).json(message)
    }


    public async deletCiente(){
        const {type, message} = await this.service.deleteCliente(this.req.params.id)
        this.res.status(type).json(message)
    }

    public async updateCLiente(){
        const {type, message} = await this.service.updateCliente(this.req.params.id, this.req.body)
      return  this.res.status(type).json(message)
    }

    public async getAllCliente(){
        const {type, message} = await this.service.getAllClient()
        this.res.status(type).json(message)
    } 
    public async getOneCliente(){
        const {type, message} = await this.service.deleteCliente(this.req.params.id)

        this.res.status(type).json(message)
    }
}

export default createCliente

