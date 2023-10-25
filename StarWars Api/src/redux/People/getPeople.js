import axios from "axios";

const BASE_URL = "https://swapi.dev/api/people/"

export const getPeople = async (page) => {
    const response = await axios.get(`${BASE_URL}?page=${page}`)
    return response.data
}