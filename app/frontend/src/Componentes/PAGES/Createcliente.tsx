import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
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

export function CreateCliente() {
  const { register, handleSubmit, reset } = useForm({});
  const [list, setDelet] = useState<IuserBack[]>([]);
  const [create, setCreate] = useState<any>();
  const [cpf, setcpf] = useState<any>();

  const handleSubmitPost = async (data: string) => {
    await api.post("cliente", data);
    setCreate(list.filter((del) => del._id !== data));
    reset();
  };

  function handlechange(e: any): void {
    setcpf(e.target.value);
  }

  return (
    <Box
      sx={{ width: "100%" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <FormControl sx={{ width: "100ch" }}>
          <form onSubmit={handleSubmit(handleSubmitPost)}>
            <div
              className="form-control"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{ width: "50ch" }}
                id="standard-name"
                label="Name"
                onChange={(e) => handlechange(e)}
                value={cpf}
                variant="filled"
                {...register("name")}
                type="text"
              />
            </div>
            <div
              className="form-control"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{ width: "50ch" }}
                id="outlined-telefone"
                label="Phone"
                onChange={(e) => handlechange(e)}
                value={cpf}
                variant="filled"
                {...register("telefone")}
                type="number"
              />
            </div>
            <div
              className="form-control"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{ width: "50ch" }}
                id="outlined-email"
                label="Email"
                onChange={(e) => handlechange(e)}
                value={cpf}
                variant="filled"
                {...register("email")}
                type="text"
              />
            </div>
            <div
              className="form-control"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{ width: "50ch" }}
                id="outlined-cpf"
                label="Cpf"
                onChange={(e) => handlechange(e)}
                value={cpf}
                variant="filled"
                {...register("cpf")}
                type="number"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" type="submit" sx={{ width: "50%" }}>
                Cadastrar
              </Button>
            </div>
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
}
