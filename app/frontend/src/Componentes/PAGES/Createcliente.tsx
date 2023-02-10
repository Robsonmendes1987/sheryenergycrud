import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/userBackApi";

interface IuserBack {
  _id: string;
  name: string;
  email: string;
  telefone: number;
  cpf: string;
}

export function CreateCliente() {
  const { register, handleSubmit, reset } = useForm({});
  const [list] = useState<IuserBack[]>([]);
  const [create, setCreate] = useState<any>();
  const [cpf] = useState<any>();
  const [state, setState] = useState<IuserBack[]>([]);
  const navigate = useNavigate()

  const getUserBackend = async () => {
    const result = await api.get("/cliente");

    setState(result.data);
  };

  const handleSubmitPost = async (data: IuserBack) => {
    await api.post("cliente", data);
    setCreate(list.filter((del) => del._id !== data._id));
    reset();
  };

  
  useEffect(() => {
    getUserBackend();
  }, []);


  return (
    <main
      className="bg-gray-100"
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{ width: "100%" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                  register
                </Button>
              </div>
            </form>
          </FormControl>
        </Grid>
      </Box>
    </main>
  );
}
