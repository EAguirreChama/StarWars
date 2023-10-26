import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoId } from "../../Info/getInfoId";
import NavBar from "../../Componentes/NavBar";
import LoadingStyle from "../../Styles/NavBar.module.css"
import StarshipStyle from "../../Styles/Detail.module.css"

const StarshipDetail = () => {
    const { id } = useParams()
    const [starshipDetail, setStarshipDetail] = useState(null)

    useEffect(() => {
        const fetchPersonDetail = async () => {
            try {
                const details = await getInfoId(id, "starships");
                setStarshipDetail(details);
            } catch (error) {
                console.error("Error al obtener detalles de la Nave:", error);
            }
        };

        fetchPersonDetail();
    }, [id])

    if (!starshipDetail) {
        return <div className={LoadingStyle.loading}>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <div className={StarshipStyle.contenedor}>
                <div className={StarshipStyle.card}>
                    <h1>Details of the Ship {starshipDetail.name}</h1>
                    <p>Manufacturer: {starshipDetail.manufacturer}</p>
                    <p>Consumables: {starshipDetail.consumables}</p>
                    <p>Starship Class: {starshipDetail.starship_class}</p>
                </div>
            </div>
        </div>
    )
}

export default StarshipDetail;