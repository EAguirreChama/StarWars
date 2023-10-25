import axios from "axios";

const BASE_URL = "https://swapi.dev/api"

export const getPersonId = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/people/${id}`)
        return response.data
    } catch (error) {
        console.log('Error al obtener detalles de ese Personaje', error);
        throw error
    }
}