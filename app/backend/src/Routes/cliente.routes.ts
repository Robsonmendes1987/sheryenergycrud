import { Request, Response ,Router } from "express";
import createCliente from "../controller/cliente.controller";
import { validateToken } from "../utils/jwt.utils";

const route = Router()

route.post('/', (req: Request, res: Response) => new createCliente(req, res).createClient())
route.get('/:id', (req: Request, res: Response) => new createCliente(req, res).getOneCliente())
route.get('/', (req: Request, res: Response) => new createCliente(req, res).getAllCliente())
route.patch('/:id', (req: Request, res: Response) => new createCliente(req, res).updateCLiente())
route.delete('/:id', (req: Request, res: Response) => new createCliente(req, res).deletCiente())

export default route;