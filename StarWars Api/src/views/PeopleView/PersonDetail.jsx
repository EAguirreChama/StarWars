import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonId } from "../../redux/People/getPeopleId";

const PersonDetail = () => {
    const { id } = useParams()
    const [personDetail, setPersonDetail] = useState(null)

    useEffect(() => {
        const fetchPersonDetail = async () => {
            try {
                const details = await getPersonId(id);
                setPersonDetail(details);
            } catch (error) {
                console.error("Error al obtener detalles de la persona:", error);
            }
        };

        fetchPersonDetail();
    }, [id])

    if (!personDetail) {
        return <div>Cargando ...</div>;
    }

    return (
        <div>
            <h1>Aqui Detalle de Persona</h1>
            <h2>{personDetail.name}</h2>
        </div>
    )
}

export default PersonDetail;
