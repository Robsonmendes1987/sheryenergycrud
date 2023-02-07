import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getDog from "../services/dogapi";

export function Dogs() {
  const [dog, setDog] = useState("");

  const navigate = useNavigate();

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
        height: "100ch",
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              height: "5ch",
              width: "90%",
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
                navigate("/clients");
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
          <Button
            color="success"
            onClick={async () => {
              await handleclick();
            }}
          >
            Click Here for more Dogs
          </Button>{" "}
          <img src={dog} />
        </Box>
      </Grid>
    </main>
  );
}
