import axios from "axios";

export const getNaves = async () => {
    try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        return response.data.results;
    } catch (error) {
        console.error("Error al obtener naves", error);
        throw error;
    }
};