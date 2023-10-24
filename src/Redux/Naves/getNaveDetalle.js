import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const getNaveDetalles = async (naveId) => {
  try {
    const response = await axios.get(`${BASE_URL}/starships/${naveId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del nave', error);
    throw error;
  }
};