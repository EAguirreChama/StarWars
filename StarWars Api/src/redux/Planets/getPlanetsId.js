import axios from "axios";

const BASE_URL = "https://swapi.dev/api"

export const getPlanetId = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/planets/${id}`)
        return response.data
    } catch (error) {
        console.log('Error al obtener detalles de ese Planeta', error);
        throw error
    }
}