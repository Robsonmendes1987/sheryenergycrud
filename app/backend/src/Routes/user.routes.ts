import { Router } from "express";
import UserController from '../controller/user.controller'


const route = Router()

route.post('/', (req, res) => new UserController(req, res).createUser())
route.get('/:id', (req, res) => new UserController(req, res).findOne())

export default route;
