import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../../services/userBackApi";

interface IuserBack {
  _id: string;
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

export function GetOneCliente() {
  const {handleSubmit} = useForm({});
  const [list] = useState<IuserBack[]>([]);
  const [setState] = useState<any>();

  const getUserBackend = async () => {
    const result = await api.get("/cliente");
    setState(result.data);
  };

  useEffect(() => {
    getUserBackend();
  }, [list]);
  return (
    <main>
      <form onSubmit={handleSubmit(getUserBackend)}>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </main>
  );
}
