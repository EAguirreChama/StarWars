import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/';

export const getPlanetas = async (page = 1) => {
    const response = await axios.get(`${BASE_URL}planets/?page=${page}`);
    return response.data;
};