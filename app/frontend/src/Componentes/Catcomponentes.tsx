import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { possibleHTTPArray } from "../helpers/statushttp";

export function Cats() {
  const [cats, setCats] = useState("");
  const [show, setShow] = useState(false);
  const [errorCode] = useState(possibleHTTPArray);
  const navigate = useNavigate();

  const henddleclick = (data: number) => {
    setCats(`https://http.cat/${data}`);
    setShow(true);
  };

  return (
    <main
      className="bg-neutral-300"
      style={{
        height: "110ch",
        width: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70ch",
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
          <div
            className="bg-orange-400"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "4ch",
              width: "30%",
            }}
          >
            Choose the error and click
          </div>

          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "60ch",
              width: "90%",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              style={{
                display: "flex",
                justifyContent: "center",
                height: "60ch",
                width: "90%",
              }}
            >
              <Grid
                container
                xs={10}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {errorCode.map((element) => (
                  <div className="text-sm">
                    <Button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      sx={{ width: "5ch", height: "6ch" }}
                      variant="contained"
                      color="success"
                      onClick={() => {
                        henddleclick(Number(element.status));
                      }}
                    >
                      <div className="texto-sm">
                        <p className="text-red-700 text-sm">{element.status}</p>
                      </div>
                    </Button>
                  </div>
                ))}
                {show && (
                  <div
                    className="text-[20px]"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid
                      container
                      xs={10}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="flex-col items-center justify-center text-red-700"
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        Close
                      </button>
                      <img src={cats} />
                    </Grid>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
