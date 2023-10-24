import { useEffect, useState} from "react";
import { getPlanetas } from "../../redux/getPlanetas";

const ListaPlanetas = () => {
    const [planetas, setPlanetas] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const datosPlanetas = await getPlanetas();
          setPlanetas(datosPlanetas);
        } catch (error) {
          console.error("Error en el Componente Planetas", error)
        }
      };
      fetchData();
    }, [])

    return (
      <div>
        <h2>Planetas de Star Wars</h2>
        <ul>
          {planetas.map((planetas) => (
            <li key={planetas.name}>{planetas.name}</li>
          ))}
        </ul>
      </div>
    )
}

export default ListaPlanetas;