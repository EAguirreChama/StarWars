import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/';

export const getNaves = async (page = 1) => {
    const response = await axios.get(`${BASE_URL}starships/?page=${page}`);
    return response.data;
};