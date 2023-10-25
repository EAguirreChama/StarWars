import { GET_PERSONAJES } from "./Personajes/getPersonajes";
import { GET_PERSONAJE_ID } from "./Personajes/getPersonajeId";
import { GET_PLANETAS } from "./Planetas/getPlanetasId"
import { GET_PLANETA_ID } from "./Planetas/getPlanetasId";
import { GET_NAVES } from "./Naves/getNaves";
import { GET_NAVE_ID } from "./Naves/getNavesId";

const initialState = {
    allPersonajes: [],
    allPlanetas: [],
    allNaves: [],
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
        
        case GET_PERSONAJE_ID: 
            return {
                ...state, 
                personajeDetail: action.payload
            }

        case GET_PLANETAS:
            return {
                ...state,
                allPlanetas: action.payload
            }
            
        case GET_PLANETA_ID: 
            return {
                ...state, 
                planetaDetail: action.payload
            }

        case GET_NAVES:
            return {
                ...state,
                allNaves: action.payload
            }

        case GET_NAVE_ID: 
            return {
                ...state, 
                naveDetail: action.payload
            }
  
        default:
            return { 
                ...state 
            };
    }
  };

  export default reducer;