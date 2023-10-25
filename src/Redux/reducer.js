import { GET_PERSONAJES } from "./Personajes/getPersonajes"

const initialState = {
    allPersonajes: [],
    copiaAllPersonajes: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PERSONAJES:
        if (action.payload) {
          return {
            ...state,
            allPersonajes: action.payload,
            copiaAllPersonajes: action.payload
          }
        } else {
          return {
            ...state,
            allPersonajes: []
          };
        }
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;