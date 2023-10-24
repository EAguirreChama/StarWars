import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPersonajeDetalles } from "../../Redux/Personajes/getPersonajeDetalle"

const DetallePersonaje = () => {
    const { id } = useParams()
    const [personaje, setPersonaje] = useState(null);

    useEffect (() => {
        const fetchPersonajeDetalles = async () => {
            try {
                const personajeDetalles = await getPersonajeDetalles(id)
                setPersonaje(personajeDetalles)
            } catch (error) {
                console.error("Error al obtener detalles del Personaje", error);
            }
        }
        fetchPersonajeDetalles();
    }, [id]);

    if (!personaje) {
        return <div>Cargando...</div>
    }

    return (
        <h1>{personaje.name}</h1>
    )
}

export default DetallePersonaje