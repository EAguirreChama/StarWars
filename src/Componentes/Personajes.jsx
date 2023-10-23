import { useEffect, useState} from "react";
import axios from "axios";

const Listapersonajes = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const obtenerPersonajes = async () => {
          try {
            const response = await axios.get('https://swapi.dev/api/people/');
            setPersonajes(response.data.results.slice(0, 10));
          } catch (error) {
            console.error('Error al obtener personajes:', error);
          }
        };
    
        obtenerPersonajes();
      }, []); // Asegura que useEffect se ejecute solo una vez al montar el componente
    
      return (
        <div>
          <h2>Lista de Personajes de Star Wars</h2>
          <ul>
            {personajes.map(personaje => (
              <li key={personaje.name}>{personaje.name}</li>
            ))}
          </ul>
        </div>
      );
}

export default Listapersonajes;