import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoId } from "../../Info/getInfoId";

const PersonDetail = () => {
  const { id } = useParams();
  const [personDetail, setPersonDetail] = useState(null);

  useEffect(() => {
    const fetchPersonDetail = async () => {
      try {
        const details = await getInfoId(id);

        // Obtener detalles de las naves estelares
        const starshipsDetails = await Promise.all(
          details.starships.map((starship) => getInfoId(getIdFromUrl(starship), "starships"))
        );

        // Obtener detalles de las películas
        const filmsDetails = await Promise.all(
          details.films.map((film) => getInfoId(getIdFromUrl(film),"films"))
        );

        setPersonDetail({
          ...details,
          starships: starshipsDetails,
          films: filmsDetails,
        });
      } catch (error) {
        console.error("Error al obtener detalles de la persona:", error);
      }
    };

    fetchPersonDetail();
  }, [id]);

  const getIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  if (!personDetail) {
    return <div>Cargando ...</div>;
  }

  return (
    <div>
      <h1>Detalle de {personDetail.name}</h1>
      <p>Homeworld: {personDetail.homeworld}</p>
      <p>
        Films:{" "}
        {personDetail.films.map((film) => (
          <span key={film.title}>{film.title}, </span>
        ))}
      </p>
      <p>
        Starships:{" "}
        {personDetail.starships.map((starship) => (
          <span key={starship.name}>{starship.name}, </span>
        ))}
      </p>
    </div>
  );
};

export default PersonDetail;