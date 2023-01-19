import axios from "axios";
import { IuserBack } from "../helpers/interfaces/apibackend";

// export  const apiBackend = async (): Promise<IuserBack[]> => {
//     const api = await axios.request({
//     url: 'http://localhost:3001/',
//     method: 'get'
//     }) 
//     api.data.results.map((element: any)=>({
//         name: element.name,
//         email: element.email,
//         phone: element.telefone,
//         cpf: element.cpf,
//         address: element.address
//     }))

//     return api.data
// }

 export const  api =  axios.create({
    baseURL: 'http://localhost:3001/'
})

