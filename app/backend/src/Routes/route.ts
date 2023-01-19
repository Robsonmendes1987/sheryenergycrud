import  express  from "express";
import userRoute from './user.routes'
import addressRoute from './address.routes'
import clienteRoute from './cliente.routes'
import loginRoute from './login.routes'

const routers =  express.Router()

routers.use('/register', userRoute)
routers.use('/address', addressRoute)
routers.use('/cliente', clienteRoute)
routers.use('/cliente/', clienteRoute)
routers.use('/login', loginRoute)


export default routers;