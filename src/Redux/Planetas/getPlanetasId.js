import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_PLANETA_ID = "GET_PLANETA_ID"

export const getPlanetaId = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`${BASE_URL}planets/${id}`)
        const planetaId = apiData.data;
            dispatch ({ type: GET_PLANETA_ID , payload: planetaId})
    }
}