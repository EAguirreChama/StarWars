import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_PERSONAJE_ID = "GET_PERSONAJE_ID"

export const getPersonajesId = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`${BASE_URL}people/${id}`)
        const personajeId = apiData.data;
            dispatch ({ type: GET_PERSONAJE_ID , payload: personajeId})
    }
}