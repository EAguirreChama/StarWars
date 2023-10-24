import { useEffect, useState } from "react";
import { getPersonajes } from "../../Redux/getPersonajes";

const ListaPersonajes = () => {
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const datosPersonajes = await getPersonajes()
                setPersonajes(datosPersonajes)
            } catch (error) {
                console.error("Error en el Componente Personajes", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h2>Personajes Star Wars</h2>
            <ul>
                {personajes.map((personaje) => (
                    <li key={personaje.name}>{personaje.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaPersonajes