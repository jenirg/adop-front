import { parsedEnv } from "../../../env"
import Card from "@/Components/Card";
import axios from "axios"


interface Props {
    params: {
        id: string;
    }
}

interface User {
    id: number;
    name: string;
    lastname: string;
}

export default async function UserProfile({ params }: Props) {
    const response = await axios.get<User>(`${parsedEnv.API_URL}/users/${params.id}`)
    const user = response.data; 
    return (
        <main>
            <h1>User Profile</h1>
            <Card
                key={user.id}
                id={user.id}
                name={user.name}
                lastname={user.lastname}
            />
        </main>
    )
}