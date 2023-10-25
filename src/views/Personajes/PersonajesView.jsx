import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonajes } from "../../Redux/Personajes/getPersonajes";
import CartasContainer from "../../Componentes/Cartas/CartasContainer/CartasContainer";

const Personajes = () => {
    const dispatch = useDispatch()

    const allPersonajes = useSelector(state => state.allPersonajes)

    useEffect(() => {
        !allPersonajes?.legth && dispatch(getPersonajes())
    }, [dispatch, allPersonajes?.legth])
    
    return (
        <div>
            <h1>Aqui van a estar todos los personajes con paginación y filtros</h1>
            <CartasContainer/>
        </div>
    )
}

export default Personajes;