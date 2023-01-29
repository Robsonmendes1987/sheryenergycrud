import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getDog from "../services/dogapi";

export function Dogs() {
  const [dog, setDog] = useState("");

  const navigate = useNavigate()

  const handleclick = async () => {
    const nextDog = await getDog();
    setDog(nextDog);
  };

  useEffect(() => {
    const getAllDog = async () => {
      const dogs = await getDog();
      setDog(dogs);
    };
    getAllDog();
  }, []);

  return (
    <main
    className="bg-orange-200"
    >
      <Box
         sx={{ width: "100%" }}
         style={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
         }}
      >
        
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
      <Grid
        style={{
          // display: "flex",
          justifyContent: "space-between",
        }}
      >
      <Button
          variant="contained"
          onClick={() => {
            navigate("/cats");
          }}
        >
          CATS
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/clientes");
          }}
        >
          CLIENTES
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/usuarios");
          }}
        >
          LISTA USUARIOS
        </Button>
        </Grid>

      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        
      
      </Grid>
      <Button
        color="success"
        onClick={async () => {
          await handleclick();
        }}
      >
        Click Here for more Dogs
      </Button>{" "}
      <img src={dog} />
      </Grid>
      </Box>
    </main>
  );
}
