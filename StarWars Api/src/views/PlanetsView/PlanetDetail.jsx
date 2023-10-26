import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoId } from "../../Info/getInfoId";


const PlanetDetail = () => {
    const { id } = useParams()
    const [planetDetail, setPlanetDetail] = useState(null)

    useEffect(() => {
        const fetchPersonDetail = async () => {
            try {
                const details = await getInfoId(id);
                setPlanetDetail(details);
            } catch (error) {
                console.error("Error al obtener detalles del planeta:", error);
            }
        };

        fetchPersonDetail();
    }, [id])

    if (!planetDetail) {
        return <div>Cargando ...</div>;
    }

    return (
        <div>
            <h1>Aqui Detalle de Planeta</h1>
            <h2>{planetDetail.name}</h2>
        </div>
    )
}

export default PlanetDetail;