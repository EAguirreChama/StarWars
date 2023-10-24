import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const getPersonajes = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}people/?page=${page}`);
  return response.data;
};