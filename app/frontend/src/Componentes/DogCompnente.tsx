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
    className="bg-orange-600"
    style={{
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      height: "100ch",
      // width: "100%"
    }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}   style={{
      // display: "flex",
      // alignItems: "center",
      justifyContent: "center",
      // height: "50ch",
      // width: "90%"
    }}>
      <Box
         sx={{ width: "100%" }}
         style={{
          //  display: "flex",
           alignItems: "center",
           justifyContent: "center",
        width: "80%"

         }}
      >
        
      
         <Grid 
      // sx={{ width: "100ch", height: "35ch" }}
       style={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        height: "5ch",
        width: "90%"
      }}
      >
      <Button
          variant="contained"
          onClick={() => {
            navigate("/cats");
          }}
        >
         Page CATS
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/clientes");
          }}
          >
         Page CLIENTES
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/usuarios");
          }}
          >
         Page LISTA USUARIOS
        </Button>
          </Grid>

          {/* <Grid 
      // sx={{ width: "100ch", height: "35ch" }}
       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60ch",
        width: "90%"
      }}
      > */}
        
      
      <Button
        color="success"
        onClick={async () => {
          await handleclick();
        }}
        >
        Click Here for more Dogs
      </Button>{" "}
      <img src={dog} />
        {/* </Grid> */}
      </Box>
      </Grid>
    </main>
  );
}
