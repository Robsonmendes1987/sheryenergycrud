import ClientModel from "../model/client.model";
import IClaient from "../interfaces/IClient";
import CLientDomian from '../Domian/CLient'

class createCliente {
    private freame = new ClientModel()
    public newCliente(client: IClaient | null): CLientDomian | null{
        if(client) {
            return new CLientDomian(
                client.id,
                client.name,
                client.email,
                client.telefone,
                client.cpf,
                // client.address,
            )
        }
       return null
    }

    public async crateCLiente(cliente: IClaient){
        const newcliente = await this.freame.createCliente(cliente)
        return {type: 201, message: this.newCliente(newcliente)}
    }

    public async readOne(_id: string){
        const freame = await this.freame.readOne(_id)
        
        return {type: 201, message: freame}
    }

    public async updateCliente(_id:  string, cliente: IClaient){
      const freame = await this.freame.updateCliente(_id, cliente)
      if (freame === 'Invalid MongoId') {
        return { type: 422, message: 'Invalid mongo id' };
      }
      if (!freame) {
        return { type: 404, message: 'CLiente not found' };
      }
      const result = this.newCliente(freame)
        return {type: null, message: (result)}
    }

    public async deleteCliente(_id: string){
        const freame = await this.freame.deletCliente(_id)
        return {type: 200, message: freame}
    }

    public async getAllClient(){
        const freame = await this.freame.getAllCliente()
        return {type: 200, message: (freame)}
    }

    public async getOneClient(_id: string){
        const freame = await this.freame.getOneCliente(_id)
        const result = this.newCliente(freame)
        console.log('BACEND', result)
        return {type: 200, message: (result)}
    }
}

export default createCliente;