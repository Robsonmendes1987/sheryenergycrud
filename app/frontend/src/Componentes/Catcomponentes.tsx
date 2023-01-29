import { Box, Button, createTheme, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { number } from "yup";
import { possibleHTTPArray } from "../helpers/statushttp";

interface IErrorCode {
  status: number,
  message: number,
}

export function Cats() {
  const [cats, setCats] = useState('');
  const [show, setShow] = useState(false);
  const [errorCode, seterrorCode] = useState(possibleHTTPArray);
  const [nextpages, setNextPages] = useState(1);
  const [currintPage, setCurrientePage] = useState(0);

  const navigate = useNavigate()

  const henddleclick = (data: number) => {
    setCats(`https://http.cat/${data}`);
    setShow(true);
  };

  return (
    <main>
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70ch",

      }}
    >

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}   style={{
        // display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        // height: "50ch",
        // width: "90%"
      }}>
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
      <Button variant="contained" onClick={()=> {navigate('/dogs')}} >Page DOGS</Button>
      <Button variant="contained" onClick={()=> {navigate('/clientes')}} >Page CLIENTES</Button>
      <Button variant="contained" onClick={()=> {navigate('/usuarios')}} >Page LISTA USUARIOS</Button>
      </Grid>
<div
className="bg-orange-400"
   style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "4ch",
    width: "30%"
  }}
>
      Choose the error and click
      </div>

      <Grid 
      // sx={{ width: "100ch", height: "35ch" }}
       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60ch",
        width: "90%"
      }}
      >
        <Grid container rowSpacing={1} 
        style={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        height: "60ch",
        width: "90%"
      }}
        
        >
          <Grid
          container 
         //  item xs={4}
            xs={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        {errorCode.map((element) => (
          <div
          className="text-sm"
          >
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
            <div  className="texto-sm">
              <p className="text-red-700 text-sm" >{element.status}</p>
              {/* <p className="text-[6px]">{element.message}</p> */}
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
         //  item xs={4}
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
