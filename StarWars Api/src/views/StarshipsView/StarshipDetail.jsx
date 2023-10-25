import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStarshipId } from "../../redux/Starships/getStarshipId"

const StarshipDetail = () => {
    const { id } = useParams()
    const [starshipDetail, setStarshipDetail] = useState(null)

    useEffect(() => {
        const fetchPersonDetail = async () => {
            try {
                const details = await getStarshipId(id);
                setStarshipDetail(details);
            } catch (error) {
                console.error("Error al obtener detalles de la Nave:", error);
            }
        };

        fetchPersonDetail();
    }, [id])

    if (!starshipDetail) {
        return <div>Cargando ...</div>;
    }

    return (
        <div>
            <h1>Aqui Detalle de la Nave</h1>
            <h2>{starshipDetail.name}</h2>
        </div>
    )
}

export default StarshipDetail;