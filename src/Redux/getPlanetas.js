import axios from "axios";

export const getPlanetas = async () => {
    try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        return response.data.results;
    } catch (error) {
        console.error("Error al obtener planetas", error);
        throw error;
    }
};