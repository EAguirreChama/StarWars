import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_PERSONAJES = "GET_PERSONAJES"

export const getPersonajes = () => {
    return async function (dispatch) {
        const apiData = await axios.get (`${BASE_URL}people/`)
        const personajes = apiData.data;
          dispatch ({ type: GET_PERSONAJES , payload: personajes})
    }
}