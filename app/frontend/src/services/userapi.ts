import axios from "axios";
import { Iusers } from "../context/UserProvider";

const getUser = async (path: string): Promise<Iusers[]> => {
  const result = await axios.request({
    url: `https://randomuser.me/api/?inc=name,email,dob,picture,login${path}`,
    method: "get",
  });
  return result.data.results.map((user: any) => ({
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    username: user.login.username,
    age: user.dob.age,
    picture: user.picture.large,
  }));
};

export default getUser;
