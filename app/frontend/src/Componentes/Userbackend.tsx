import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../services/userBackApi";
import { CreateCliente } from "./PAGES/Createcliente";
import Chip from "@mui/material/Chip";
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

export function UserBackApi() {
  const [state, setState] = useState<IuserBack[]>([]);
  const { register, handleSubmit, reset } = useForm({});
  const navigate = useNavigate();

  const getUserBackend = async () => {
    const result = await api.get("/cliente");

    setState(result.data);
  };
  const deletUser = async (id: string) => {
    await api.delete(`/cliente/${id}`);
    setState(state.filter((del) => del._id !== id));
  };

  useEffect(() => {
    getUserBackend();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      width: 1000,
      flexDirection: "column",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    name: string,
    telefone: number,
    email: number,
    cpf: number
  ) {
    return { name, telefone, email, cpf };
  }

  return (
    <main
      className="bg-violet-200"
      style={{
        height: "83ch",
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
        <TableContainer component={Paper}>
          <main
            className="bg-gray-100"
            style={{
              height: "83ch",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                navigate("/dogs");
              }}
            >
              Page DOGS
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/usuarios");
              }}
            >
              {" "}
              Page usuarios
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/cats");
              }}
            >
              Page Error Cats
            </Button>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "33ch",
                width: "90%",
              }}
            >
              <CreateCliente />
            </Grid>

            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Phone </StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Cpf</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.map((element, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {element.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {element.telefone}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {element.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {element.cpf}
                    </StyledTableCell>

                    <Link to={{ pathname: `/edit/${element._id}` }}>
                      <Button variant="outlined">Edit</Button>
                    </Link>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deletUser(element._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </main>
        </TableContainer>
      </Box>
    </main>
  );
}
