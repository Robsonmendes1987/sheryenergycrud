import React, { useState, useEffect } from "react";
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
// type FormValues = {
//   name: string;
//   telefone: number;
//   email: string;
//   cpf: string;
//   id: string;
//   data: string;
// };
export function EditCliente() {
  const [list, setDelet] = useState<IuserBack[]>([]);
  const [create, setCreate] = useState<IuserBack>();
  const [state, setState] = useState<any>();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const history = useNavigate();

  const getUserBackend = async (_id: string) => {
    const result = await api.get(`cliente/${_id}`);

    reset(result.data[0]);
  };

  // const handleSubmitPost = async (data: string) => {
  //   await api.post("cliente", data);
  //   setCreate(list.filter((del) => del._id !== data));
  //   reset();
  // };
  const handleSubmitPut = async (
    _id: string,
    data: string
  ): Promise<FormValues> => {
    await api.put(`/cliente/${_id}`, data);
    setCreate(create);
    console.log("TESTE", setCreate);
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
              <div className="form-control">
                <div
                  className="form-control"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    className="form-control"
                    // xs={0}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      className="form-control"
                      sx={{ width: "50ch" }}
                      id="standard-name"
                      label="Name"
                      value={state}
                      variant="filled"
                      {...register("name")}
                      type="text"
                      onChange={(e) => handlechange(e)}
                    />
                  </Grid>
                </div>
                <div
                  className="form-control"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    className="form-control"
                    // xs={0}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      className="form-control"
                      sx={{ width: "50ch" }}
                      id="outlined-telefone"
                      label="telefone"
                      value={state}
                      variant="filled"
                      {...register("telefone")}
                      onChange={(e) => handlechange(e)}
                      type="number"
                    />
                  </Grid>
                </div>
                <div
                  className="form-control"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    className="form-control"
                    // xs={0}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      className="form-control"
                      sx={{ width: "50ch" }}
                      id="outlined-email"
                      label="Email"
                      value={state}
                      variant="filled"
                      {...register("email")}
                      onChange={(e) => handlechange(e)}
                      type="text"
                    />
                  </Grid>
                </div>
                <div
                  className="form-control"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    className="form-control"
                    // xs={0}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      className="form-control"
                      sx={{ width: "50ch" }}
                      id="outlined-cpf"
                      label="Cpf"
                      value={state}
                      variant="filled"
                      {...register("cpf")}
                      onChange={(e) => handlechange(e)}
                      type="text"
                    />
                  </Grid>
                </div>

                <Grid
                  className="form-control"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="form-control"
                    sx={{ width: "50ch" }}
                    variant="contained"
                    type="button"
                    onClick={() => history("/clients")}
                  >
                    save changes
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
