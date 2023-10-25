import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/'
export const GET_NAVE_ID = "GET_NAVE_ID"

export const getNavesId = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`${BASE_URL}starships/${id}`)
        const navesId = apiData.data;
            dispatch ({ type: GET_NAVE_ID , payload: navesId})
    }
}