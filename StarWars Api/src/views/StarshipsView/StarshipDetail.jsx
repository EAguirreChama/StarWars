import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoId } from "../../Info/getInfoId";
import NavBar from "../../Componentes/NavBar";
import LoadingStyle from "../../Styles/NavBar.module.css"

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
            <NavBar/>
            <h1>Detalle de la Nave {starshipDetail.name}</h1>
            <h2>Manufacturer: {starshipDetail.manufacturer}</h2>
            <h2>Consumables: {starshipDetail.consumables}</h2>
            <h2>Starship Class: {starshipDetail.starship_class}</h2>
        </div>
    )
}

export default StarshipDetail;