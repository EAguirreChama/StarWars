import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPlanetaDetalles } from "../../Redux/Planetas/getPlanetaDetalle"

const DetallePlaneta = () => {
    const { id } = useParams()
    const [planeta, setPlaneta] = useState(null)

    useEffect (() => {
        const fetchPlanetaDetalles = async () => {
            try {
                const planetaDetalles = await (getPlanetaDetalles(id))
                setPlaneta(planetaDetalles)
            } catch (error) {
                console.error("Error al obtener detalles del Planeta", error);
            }
        }
        fetchPlanetaDetalles()
    }, [id])

    if(!planeta) {
        return <div>Cargando...</div>
    }

    return (
        <h1>{planeta.name}</h1>
    )
}

export default DetallePlaneta