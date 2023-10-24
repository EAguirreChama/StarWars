import axios from "axios";

export const getPersonajes = async () => {
    try {
        const response = await axios.get("https://swapi.dev/api/people/");
        return response.data.results;
    } catch (error) {
        console.error("Error al obtener personajes", error);
        throw error;
    }
};