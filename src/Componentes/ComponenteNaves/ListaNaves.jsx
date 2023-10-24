import { useEffect, useState } from "react";
import { getNaves } from "../../Redux/getNaves";

const ListaNaves = () => {
    const [naves, setNaves] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const datosNaves = await getNaves()
                setNaves(datosNaves)
            } catch (error) {
                console.error("Error en el Componente Naves", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h2>Naves Star Wars</h2>
            <ul>
                {naves.map((nave) => (
                    <li key={nave.name}>{nave.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaNaves