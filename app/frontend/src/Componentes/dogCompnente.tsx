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
      <Link to="/cats">CATS</Link>
      <Link to="/clientes">CLIENTES</Link>
      <Link to="/usuarios">LISTA USUARIOS</Link>
      <button
        onClick={async () => {
          await handleclick();
        }}
      >
        Botao
      </button>{" "}
      DOGS
      <img src={dog} />
    </main>
  );
}
