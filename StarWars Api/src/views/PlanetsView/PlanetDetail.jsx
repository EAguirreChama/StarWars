import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoId } from "../../Info/getInfoId";

const PlanetDetail = () => {
    const { id } = useParams()
    const [planetDetail, setPlanetDetail] = useState(null)

    useEffect(() => {
        const fetchPlanetDetail = async () => {
            try {
                const details = await getInfoId(id, "planets");

                // Obtener los detalles de los Residentes
                const residentsDetails = await Promise.all(
                    details.residents.map((resident) => getInfoId(getIdFromUrl(resident), "people"))
                );



                setPlanetDetail({
                    ...details,
                    residents: residentsDetails
                });
            } catch (error) {
                console.error("Error al obtener detalles del planeta:", error);
            }
        };

        fetchPlanetDetail();
    }, [id])

    const getIdFromUrl = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
    };

    if (!planetDetail) {
        return <div>Cargando ...</div>;
    }

    return (
        <div>
            <h1>Detalle de {planetDetail.name}</h1>
            <p>Terrain: {planetDetail.terrain}</p>
            <p>Climate: {planetDetail.climate}</p>
            <p>Diameter: {planetDetail.diameter}</p>
            <p>
                {planetDetail.residents.length > 0 ? (
                    <>
                        Residents:{" "}
                        {planetDetail.residents.map((resident) => (
                            <span key={resident.name}>{resident.name}, </span>
                        ))}
                    </>
                ) : (
                    "No hay residentes en este planeta."
                )}
            </p>
        </div>
    );
}

export default PlanetDetail;