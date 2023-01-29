import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  ImageList,
  ImageListItem,
  Table,
  TablePagination,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/UserProvider";
import userApi from "../services/userapi";

export interface IPages {
  age: string;
  email: string;
  username: string;
  name: string;
  picture: string;
}

export function Users() {
  const [page, setPage] = useState<IPages[]>();
  const [next, setNext] = useState(1);
  const { users, allUsers } = useContext(AppContext);

  const nextPage = async (value: number) => {
    const getUser = await allUsers(value);
    setPage(getUser);
  };
  useEffect(() => {
    nextPage(1);
  }, []);

  return (
    <Box>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/cats">Error CATS</Link>
        <Link to="/dogs">Images DOGS</Link>
        <Link to="/clientes">Registration of CLIENTES</Link>
      </Grid>
      <Button
        variant="outlined"
        onClick={() => {
          const count = next > 1 ? next - 1 : next;
          nextPage(count);
          setNext(count);
        }}
      >
        Previous
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          const count = next + 1;
          nextPage(count);
          setNext(count);
        }}
      >
        {" "}
        Next
      </Button>

      {page?.map((user, index) => (
        <CardContent>
          <Card variant="outlined">
            {
              <div key={index}>
                <img src={user.picture} />
                <Table>
                  <p>Age: {user.age}</p>
                </Table>

                <p>Emai: {user.email}</p>
                <p>UserName: {user.username}</p>
                <p>Name: {user.name}</p>
                {/* "street": "Rua de cosme",
      "district": "Belvedere",
      "number": "32",
      "city": "Paulo Camilo",
      "state": "LAsos",
      "_id": "63c93afa2c93989b1c5b6133" */}
              </div>
            }
          </Card>
        </CardContent>
      ))}
      {/* </ImageList> */}
    </Box>
  );
}
