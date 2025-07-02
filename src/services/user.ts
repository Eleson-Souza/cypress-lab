import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const getUsers = async (): Promise<User[]> => {
  const response = await axiosRequest.get<User[]>("/users");

  return response.data;
};

export { getUsers };
export type { User };
