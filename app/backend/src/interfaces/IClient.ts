import { SchemaDefinitionProperty } from "mongoose";
import IAdress from "./IAdress";

interface IClaient  {
    id?: string | undefined,
    name: string,
    email: string,
    telefone: number,
    cpf: string,
    // address: object,
}

export default IClaient