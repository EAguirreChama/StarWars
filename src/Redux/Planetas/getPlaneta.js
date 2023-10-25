import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_PLANETAS = "GET_PLANETAS"

export const getPlanetas = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`${BASE_URL}planets/`)
        const planetas = apiData.data;
         dispatch ({ type: GET_PLANETAS , payload: planetas})
    }
}