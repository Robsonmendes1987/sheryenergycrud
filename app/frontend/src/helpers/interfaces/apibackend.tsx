export interface IuserBack {
    name: string;
    email: string;
    telefone: number;
    cpf: string;
    address: {
      city: string;
      district: string;
      number: number;
      street: string;
      state: string;
    };
  }