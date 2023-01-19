import { Request, Response ,Router } from "express";
import createCliente from "../controller/cliente.controller";
import { validateToken } from "../utils/jwt.utils";

const route = Router()

route.post('/', validateToken, (req: Request, res: Response) => new createCliente(req, res).createClient())
route.get('/', validateToken, (req: Request, res: Response) => new createCliente(req, res).getAllCliente())
route.get('/:id', validateToken, (req: Request, res: Response) => new createCliente(req, res).getOneCliente())
route.patch('/:id', validateToken, (req: Request, res: Response) => new createCliente(req, res).updateCLiente())
route.delete('/:id', validateToken, (req: Request, res: Response) => new createCliente(req, res).deletCiente())

export default route;