import Card from "../Carta/Carta";
import Paginacion from "../../Paginacion/Paginacion"
import { useSelector } from "react-redux";
import { useState } from "react";

const CartasContainer = () => {
    const [paginaActual, setPaginaActual] = useState(1)

    const allPersonajes = useSelector(state => state.allPersonajes)

    const personajesPorPag = 10;
    const ultIndex = paginaActual * personajesPorPag
    const primerIndex = ultIndex - personajesPorPag

    const actualPersonajes = allPersonajes.slice(
        primerIndex,
        ultIndex
    )

    const clickPag = (numeroPag) => {
        setPaginaActual(numeroPag)
    }
    return (
        <div>
            <div>
                <Paginacion personajesPorPag={personajesPorPag} totalPersonajes={allPersonajes.length} clickPag={clickPag} paginaActual={paginaActual}/>
            </div>

            <div>
                {
                    actualPersonajes.map(personaje => {
                        return <Card
                            key={personaje.id}
                            name={personaje.id}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default CartasContainer