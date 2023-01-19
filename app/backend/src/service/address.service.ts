import  AddressDomian from '../Domian/Adress'
import IAdress from '../interfaces/IAdress'
import Address from '../model/address.models'

class AddressCreate {
    private createAdress(address: IAdress | null): AddressDomian | null {
        if(address) {
            return new AddressDomian(
                address.city,
                address.number,
                address.district,
                address.state,
                address.street,
            )
        }
        return null

    }
    public async newAddress(address: IAdress) {
        const getAddress = new Address()
        const newAddress = await getAddress.createAddress(address)
        const allAddress = this.createAdress(newAddress)
        return {type:200, message: {allAddress}}
        // return this.createAdress(newAddress)


    }
}

export default AddressCreate