import axios from "axios";

const BASE_URL = "https://swapi.dev/api"

export const getStarshipId = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/starships/${id}`)
        return response.data
    } catch (error) {
        console.log('Error al obtener detalles de esa Nave', error);
        throw error
    }
}