import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
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

  const getUserBackend = async () => {
    const result = await api.get("/cliente");

    setState(result.data);
  };
  const deletUser = async (id: string) => {
    await api.delete(`/cliente/${id}`);
    setState(state.filter((del) => del._id !== id));
  };

  const handleSubmitEdit = async (data: string) => {
    await api.put("cliente", data);
    setState(state.filter((del) => del._id !== data));
    reset();
  };

  useEffect(() => {
    getUserBackend();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      // padding: 10,
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
    // hide last border
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
    <Box
      sx={{ width: "100%" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TableContainer component={Paper}>
        <CreateCliente />

        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Telefone </StyledTableCell>
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
                {/* <StyledTableCell align="right">{element.name}</StyledTableCell> */}
                <StyledTableCell align="right">
                  {element.telefone}
                </StyledTableCell>
                <StyledTableCell align="right">{element.email}</StyledTableCell>
                <StyledTableCell align="right">{element.cpf}</StyledTableCell>
                <div>
                  <Link to={{ pathname: `/edit/${element._id}` }}>
                    <Button variant="outlined">Editar</Button>
                  </Link>
                </div>
                <div>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deletUser(element._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

// CLIENTES
//       <CreateCliente />
//       {/* <Link to="/cats">CATS</Link>
//       <Link to="/dogs">DOGS</Link>
//       <Link to="/usuarios">LISTA USUARIOS</Link> */}
//       <div>
//         {state.map((element, index) => (
//           <div key={index}>
//             <p>Name{element.name}</p>
//             <p>Phone: {element.telefone}</p>
//             <p>Email:{element.email}</p>
//             <p>CPF: {element.cpf}</p>
//             <div>
//               <Link to={{ pathname: `/edit/${element._id}` }}>
//                 <Button variant="outlined">Editar</Button>
//               </Link>
//             </div>
//             <div>
//               <IconButton
//                 aria-label="delete"
//                 onClick={() => deletUser(element._id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </div>
//             {/* <p>City{element.address[0].city}</p>
//           <p>Address: {element.address[0].district}</p>
//           <p>Sate: {element.address[0].state}</p>
//           <p>Street: {element.address[0].street}</p>
//           <p>Number: {element.address[0].number}</p> */}
//           </div>
//         ))}
//       </div>