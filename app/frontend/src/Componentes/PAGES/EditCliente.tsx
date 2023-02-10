import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/userBackApi";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";

interface IuserBack {
  _id: string;
  name: string;
  email: string;
  telefone: number;
  cpf: string;
}

export function EditCliente() {
  const [setCreate] = useState<any>();
  const [state, setState] = useState<any>();
  const { register, handleSubmit, reset } = useForm();
  const { _id } = useParams();
  const history = useNavigate();

  const getUserBackend = async (id: string | undefined) => {
    const result = await api.get(`/cliente/${id}`);

    reset(result.data);
  };

  const handleSubmitPut = async (data: any) => {
    console.log("ESSE E DATA", data);
    await api.patch(`/cliente/${_id}`, data);
    console.log("SAIU AQUI");

    history("/clients");
  };

  useEffect(() => {
    getUserBackend(_id);
  }, [_id]);

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
          <form onSubmit={handleSubmit(handleSubmitPut)}>
            <FormControl sx={{ width: "100ch", height: "35ch" }}>
              <div className="form-control">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
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
                      value={state}
                      variant="filled"
                      {...register("name")}
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
                      sx={{ width: "50ch" }}
                      id="outlined-telefone"
                      label="telefone"
                      value={state}
                      variant="filled"
                      {...register("telefone")}
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
                      sx={{ width: "50ch" }}
                      id="outlined-email"
                      label="Email"
                      variant="filled"
                      value={state}
                      {...register("email")}
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
                      sx={{ width: "50ch" }}
                      id="outlined-cpf"
                      label="Cpf"
                      value={state}
                      variant="filled"
                      {...register("cpf")}
                      type="number"
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{ width: "50ch" }}
                      variant="contained"
                      type="submit"
                      onClick={() => handleSubmitPut}
                    >
                      save changes
                    </Button>
                  </div>
                </Grid>
              </div>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
