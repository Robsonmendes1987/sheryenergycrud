import axios from "axios";
import { IuserBack } from "../helpers/interfaces/apibackend";

export const api = axios.create({
  baseURL: "http://localhost:3003/",
});
