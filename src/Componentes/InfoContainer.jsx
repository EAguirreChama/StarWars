import style from "../Styles/CardContainer.module.css"
import styleP from "../Styles/Paginacion.module.css"
import PropTypes from "prop-types"

import Person from "./Card/CardPerson";
import Planet from "./Card/CardPlanet";
import Starship from "./Card/CardStarship";

const Info = ({ info, setPage, page, next, setUrl, tab, resetSearch }) => {
    return (
        <div className={style.container}>
            <div>
                <div className={style.CardContainer}>
                    {info?.map((dato) =>
                        tab === "people" ? (
                            <Person key={dato.name} person={dato} />
                        ) : tab === "planets" ? ( 
                            <Planet key={dato.name} planet={dato} />
                        ) : (
                            <Starship key={dato.name} starship={dato} />
                        )
                    )}
                </div>
                <div className={styleP.pagination}>
                    <button
                        onClick={() => setPage((old) => Math.min(old - 1, old))}
                        disabled={page === 1}
                    >
                        Prev Page
                    </button>
                    <span>{page}</span>
                    <button
                        onClick={() => { { setPage((old) => old + 1) } }}
                        disabled={!next}
                    >
                        Next Page
                    </button>
                    <button onClick={() => {
                        setPage(1)
                        setUrl(`https://swapi.dev/api/${tab}/`)
                        resetSearch()
                    }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

Info.propTypes = {
    info: PropTypes.array,
    page: PropTypes.number,
    setPage: PropTypes.func,
    setUrl: PropTypes.func,
    next: PropTypes.bool,
    tab: PropTypes.string,
    resetSearch: PropTypes.func,
}

export default Info