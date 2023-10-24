import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const getPersonajeDetalles = async (personajeId) => {
  try {
    const response = await axios.get(`${BASE_URL}/people/${personajeId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del personaje', error);
    throw error;
  }
};