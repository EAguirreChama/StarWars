import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export const getInfoId = async (id, tab) => {
  try {
    const response = await axios.get(`${BASE_URL}/${tab}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error al obtener detalles de ese Personaje", error);
    throw error;
  }
};