import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/userBackApi";
interface IuserBack {
  name: string;
  email: string;
  telefone: number;
  cpf: string;
  address: {
    city: string;
    district: string;
    number: number;
    street: string;
    state: string;
  };
}


export function UserBackApi() {
  const [state, setState] = useState<IuserBack[]>([]);

  const getUserBackend = async () => {
    const result = await api.get('/cliente');
   
    console.log("PASTA API", result.data[0]);
    console.log("PASTA API TWO", result.data);

    setState(result.data);
  };

  useEffect(() => {
    getUserBackend();
  }, []);

  return (
    <main>
        CLIENTES
      <Link to="/cats">CATS</Link>
      <Link to="/dogs">DOGS</Link>
      <Link to="/usuarios">LISTA USUARIOS</Link>

      <div>
        {state.map((element, index) =>  (
            
          <div key={index}>
          <p >Name{element.name}</p>
          <p>Phone: {element.telefone}</p>
          <p>Email:{element.email}</p>
          <p>CPF: {element.cpf}</p>
          {/* <p>City{element.address[0].city}</p>
          <p>Address: {element.address[0].district}</p>
          <p>Sate: {element.address[0].state}</p>
          <p>Street: {element.address[0].street}</p>
          <p>Number: {element.address[0].number}</p> */}
          </div>
        ))}

      </div>
    </main>
  );
}
