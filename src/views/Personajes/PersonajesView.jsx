import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonajes } from "../../Redux/Personajes/getPersonajes";

const Personajes = () => {
    const dispatch = useDispatch()

    const allPersonajes = useSelector(state => state.allPersonajes)

    useEffect(() => {
        !allPersonajes?.legth && dispatch(getPersonajes())
    }, [dispatch, allPersonajes?.legth])
    
    return (
        <div>
            <h1>Aqui van a estar todos los personajes con paginación y filtros</h1>
        </div>
    )
}

export default Personajes;