import React, { useState, ReactNode, createContext } from "react";
import { useEffect } from "react";
import getUser from "../services/userapi";

interface UserContextProps {
  children: ReactNode;
}
export interface Iusers {
  age: string;
  email: string;
  username: string;
  name: string;
  picture: string;
}
type userContextType = {
  users: Iusers[];
  allUsers: (value: number) => Promise<Iusers[]>
}

export const AppContext = createContext({} as userContextType);
export function UserProvider({ children }: UserContextProps) {
  const [users, setUsers] = useState<Iusers[]>([]);

  const allUsers = async (value: number = 1): Promise<Iusers[]> => {
    const result = await getUser(`&page=${value}&results=10&seed=abc`);
    return result
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <AppContext.Provider value={{ users, allUsers }}>{children}</AppContext.Provider>
  );
}
