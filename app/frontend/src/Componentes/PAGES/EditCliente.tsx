import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../../services/userBackApi";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";

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

export function EditCliente() {
  const [list, setDelet] = useState<IuserBack[]>([]);
  const [create, setCreate] = useState<any>();
  const [state, setState] = useState<any>();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const history = useNavigate();

  const getUserBackend = async (id: string) => {
    const result = await api.get(`cliente/${id}`);
    console.log("TESTE", result.data[0]);

    reset(result.data[0]);
  };
  const handleSubmitPut = async (_id: string, data: any) => {
    await api.put(`/cliente/${_id}`, data);
    setCreate(list);

    // setCreate( result );
  };
  function handlechange(e: any): void {
    setState(e.target.value);
  }

  useEffect(() => {
    getUserBackend("");
  }, []);

  return (
    <Box
      sx={{ width: "100%" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80ch",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <FormControl sx={{ width: "100ch", height: "35ch" }}>
            <form onSubmit={handleSubmit(handleSubmitPut)}>
              <div>
              <Grid
              className="form-control"
                xs={0}
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
                  value={state}
                  variant="filled"
                  {...register("name")}
                  type="text"
                />
              </Grid>

              <Grid
              className="form-control"
                xs={0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  sx={{ width: "50ch" }}
                  id="outlined-telefone"
                  label="telefone"
                  onChange={(e) => handlechange(e)}
                  value={state}
                  variant="filled"
                  {...register("telefone")}
                  type="number"
                />
              </Grid>

              {/* </div > */}
              {/* <div className="form-control"> */}
              <Grid
              className="form-control"
                xs={0}
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
                  value={state}
                  variant="filled"
                  {...register("email")}
                  type="text"
                />
              </Grid>

              {/* </div> */}
              {/* <div className="form-control"> */}
              <Grid
              className="form-control"
                xs={0}
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
                  value={state}
                  variant="filled"
                  {...register("cpf")}
                  type="text"
                />
              </Grid>
              

              <Grid
              className="form-control"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ width: "50ch" }}
                  variant="contained"
                  type="button"
                  onClick={() => history("/")}
                >
                  Salvar Alteraçôes
                </Button>
              </Grid>
              </div>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
