import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getNaveDetalles } from "../../Redux/getNaveDetalle"

const DetallePlaneta = () => {
    const { id } = useParams()
    const [nave, setNave] = useState(null)

    useEffect (() => {
        const fetchNaveDetalles = async () => {
            try {
                const naveDetalles = await (getNaveDetalles(id))
                setNave(naveDetalles)
            } catch (error) {
                console.error("Error al obtener detalles de la Nave", error);
            }
        }
        fetchNaveDetalles()
    }, [id])

    if(!nave) {
        return <div>Cargando...</div>
    }

    return (
        <h1>{nave.name}</h1>
    )
}

export default DetallePlaneta