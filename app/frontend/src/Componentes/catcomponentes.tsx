import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { possibleHTTPArray } from "../helpers/statushttp";

export function Cats() {
  const [cats, setCats] = useState("");
  const [show, setShow] = useState(false);
  const [statusCode, setStatusCode] = useState(possibleHTTPArray);
  const http = [{}];
  // conter a foto do usuário, nome completo, email, username e idade
  const henddleclick = (data: string) => {
    setCats(`https://http.cat/${data}`);
    setShow(true);
  };

  return (
    <main className="bg-red-500">
                <Link to="/dogs">DOGS</Link>
                <Link to="/clientes">CLIENTES</Link>
                <Link to="/usuarios">LISTA USUARIOS</Link>
                {/* <Link to="/">LOGIN</Link> */}

      Cats
      <div className="flex flex-col items-center justify-center text-red-700">
        {statusCode.map((element) => (
          <button
            onClick={() => {
              henddleclick(element.status);
            }}
          >
            ola
            <div>
              <p className="text-red-700">{element.status}</p>
              <p>{element.message}</p>
            </div>
          </button>
        ))}
      </div>
      {show && (
        <div>
          <button
            className="flex-col items-center justify-center text-red-700"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </button>
          <img src={cats} />
        </div>
      )}
    </main>
  );
}
