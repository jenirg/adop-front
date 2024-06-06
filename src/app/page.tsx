import axios from "axios";
import { parsedEnv } from "../../env";
import Image from "next/image";
import Card from "@/Components/Card";
interface User{
  id: number;
  name: string;
  lastname: string;
  email: string;
  address: string;
  password: string;
}

export default async function Home() {
  const response = await axios.get<User[]>(`${parsedEnv.API_URL}/users`);
  return (
  <main>
    <h1>User:</h1>
    <div>
      {
        response.data.map((user) => (
          <Card
           key={user.id} 
           id={user.id }
            name={user.name}
          lastname={user.lastname}
          />
        ))}</div>
    
  </main>
  );
}

