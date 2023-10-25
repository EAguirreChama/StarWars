import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_NAVES = "GET_NAVES"

export const getNaves = () => {
    return async function (dispatch) {
        const apiData = await axios.get (`${BASE_URL}starships/`)
        const naves = apiData.data;
          dispatch ({ type: GET_NAVES , payload: naves})
    }
}