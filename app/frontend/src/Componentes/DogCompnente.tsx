import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getDog from "../services/dogapi";

export function Dogs() {
  const [dog, setDog] = useState("");

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
    <main>
       <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
      <Link to="/cats">Error CATS</Link>
      <Link to="/clientes">CLIENTES</Link>
      <Link to="/usuarios">Registration of CLIENTES</Link>
      </Grid>
      <Button
      color="success"
        onClick={async () => {
          await handleclick();
        }}
      >
        Click Here
      </Button>{" "}
      <img src={dog} />
    </main>
  );
}
