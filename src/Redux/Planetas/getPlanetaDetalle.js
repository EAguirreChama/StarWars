import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const getPlanetaDetalles = async (planetaId) => {
  try {
    const response = await axios.get(`${BASE_URL}/planets/${planetaId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del planeta', error);
    throw error;
  }
};