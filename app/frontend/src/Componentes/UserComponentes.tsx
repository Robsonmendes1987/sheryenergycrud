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
    const qualquer = await allUsers(value);
    setPage(qualquer);
  };
  useEffect(() => {
    nextPage(1);
  }, []);

  return (
    <main>
      <Link to="/cats">CATS</Link>
      <Link to="/dogs">DOGS</Link>
      <Link to="/clientes">CLIENTES</Link>
      <button
        onClick={() => {
          const count = next > 1 ? next - 1 : next;
          nextPage(count);
          setNext(count);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          const count = next + 1;
          nextPage(count);
          setNext(count);
        }}
      >
        Next
      </button>

      {page?.map((user, index) => (
        <div key={index}>
          <p>{user.age}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user.name}</p>
          <img src={user.picture} />
          {/* "street": "Rua de cosme",
      "district": "Belvedere",
      "number": "32",
      "city": "Paulo Camilo",
      "state": "LAsos",
      "_id": "63c93afa2c93989b1c5b6133" */}
        </div>
      ))}
    </main>
  );
}
