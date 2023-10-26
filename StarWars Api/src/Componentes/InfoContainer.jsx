import style from "../Styles/CardContainer.module.css"
import styleP from "../Styles/Paginacion.module.css"
import PropTypes from "prop-types"

import Person from "./Card/CardPerson";
import Planet from "./Card/CardPlanet";


const Info = ({ people, setPage, page, next, setUrl, tab }) => {
    return (
        <div className={style.container}>
                <div>
                    <div className={style.CardContainer}>
                        {people?.map((dato) => (
                            tab === "people" ?
                                <Person key={dato.name} person={dato} /> :
                                <Planet key={dato.name} planet={dato} />
                        ))}
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
                        }}
                        >
                            Reset People
                        </button>
                    </div>
                </div>
        </div>
    )
}

Info.propTypes = {
    people: PropTypes.array,
    page: PropTypes.number,
    setPage: PropTypes.func,
    next: PropTypes.bool,
    setUrl: PropTypes.func,
    tab: PropTypes.string
}

export default Info