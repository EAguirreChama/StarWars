import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoId } from "../../Info/getInfoId";
import NavBar from "../../Componentes/NavBar";
import LoadingStyle from "../../Styles/NavBar.module.css"
import PlanetStyle from "../../Styles/Detail.module.css"

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
        return <div className={LoadingStyle.loading}>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <div className={PlanetStyle.contenedor}>
                <div className={PlanetStyle.card}>

                    <h1>Details of the Planet {planetDetail.name}</h1>
                    <p>Terrain: {planetDetail.terrain}</p>
                    <p>Climate: {planetDetail.climate}</p>
                    <p>Diameter: {planetDetail.diameter}</p>
                    <p>Residents</p>
                    <div className={PlanetStyle.Grid}>
                        {planetDetail.residents.length > 0 ? (
                            <>
                                {planetDetail.residents.map((resident) => (
                                    <div key={resident.name} className={PlanetStyle.Card}>{resident.name} </div>
                                ))}
                            </>
                        ) : (
                            "There are no residents on this planet"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetDetail;