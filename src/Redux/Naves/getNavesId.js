import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_NAVES_ID = "GET_NAVES_ID"

export const getNavesId = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`${BASE_URL}starships/${id}`)
        const navesId = apiData.data;
            dispatch ({ type: GET_NAVES_ID , payload: navesId})
    }
}