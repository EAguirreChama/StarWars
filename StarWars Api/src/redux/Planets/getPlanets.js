import axios from "axios";

const BASE_URL = "https://swapi.dev/api/planets/"

export const getPlanets = async (page) => {
    const response = await axios.get(`${BASE_URL}?page=${page}`)
    return response.data
}