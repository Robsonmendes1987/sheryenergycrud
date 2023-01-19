import { Request, Response, Router } from 'express'
import AddressController from '../controller/address.controller'

const route = Router()

route.post('/', (req: Request, res: Response) => new AddressController(req, res).createAdress())

export default route