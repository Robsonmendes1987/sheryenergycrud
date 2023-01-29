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
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const nextPage = async (value: number) => {
    const getUser = await allUsers(value);
    setPage(getUser);
  };
  useEffect(() => {
    nextPage(1);
  }, []);

  return (
    <main
    className="bg-neutral-400"
    >
    <Box>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10ch",
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
            navigate("/clients");
          }}
        >
          {" "}
          Page CLIENTES
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/cats");
          }}
        >
          Page Error Cats
        </Button>
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
      <Grid
        style={{
          display: "flex",

          height: "80ch",
          width: "100%",
        }}
      >
        <Grid
          container
          xs={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            xs={0}
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {page?.map((user, index) => (
              <div >
                <CardContent>
                  <Card
                    variant="outlined"
                    sx={{ width: "20ch", height: "28ch" }}
                  >
                    {
                      <div key={index}  className="bg-green-100">
                        <img src={user.picture} />
                        <Table>
                          <p>Age: {user.age}</p>
                        </Table>

                        <p>Emai: {user.email}</p>
                        <p>UserName: {user.username}</p>
                        <p>Name: {user.name}</p>
                      </div>
                    }
                  </Card>
                </CardContent>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </main>
  );
}
