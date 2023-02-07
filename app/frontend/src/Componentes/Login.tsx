import {
  Alert,
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/userBackApi";
import { AxiosError } from "axios";

interface Iuser {
  userName: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [state, setState] = useState<any>();
  const [errors, SetErrors] = useState("");
  const navigate = useNavigate();

  const getApi = async ({ userName, password }: Iuser) => {
    console.log("RETORNA LOGIN", userName, password);
    try {
      const token = await api.post("/login", { userName, password });
      console.log("LOGIN", token.data.token);
      localStorage.setItem("token", JSON.stringify(token.data));
      navigate("/usuarios");
      // setState(result.data.result);
    } catch (error: AxiosError | any) {
      if (error.response as AxiosError) {
        SetErrors(error.response.data);
      }
    }
  };
  console.log("ERRORS", errors);
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
            <form onSubmit={handleSubmit(getApi)}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar src="/broken-image.jpg" />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Please enter your Username and PassWord
              </div>
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
                    {...register("userName")}
                    sx={{ width: "50ch" }}
                    id="standard-username"
                    label="UserName"
                    value={state}
                    variant="filled"
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
                    {...register("password")}
                    sx={{ width: "50ch" }}
                    id="outlined-password"
                    label="PassWord"
                    value={state}
                    variant="filled"
                    type="password"
                  />
                </Grid>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  >
                  {/* <Link to={"/usuarios"}> */}
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "30%" }}
                    >
                    Enter
                  </Button>
                  {/* </Link> */}
                </div>

              </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  >
                   {errors && (<Alert severity="error">This is an error alert — {errors}</Alert>)}
                </div>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
