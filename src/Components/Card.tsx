'use client';

interface Props {
    id: number;
    name: string;
    lastname: string;
}

export default function Card({ id, name, lastname }: Props) {
   
    const handleSaludo = () => {
        alert(`${name}`)
    }

    return (
        <div>
            <h2>{`${id} - ${name}, ${lastname}`}</h2>
            <button onClick={handleSaludo}>Saludar</button>
        </div>
    )
}