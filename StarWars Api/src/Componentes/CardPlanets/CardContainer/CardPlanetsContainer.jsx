import { useState } from "react";
import { useQuery } from "react-query";
import { getPlanets } from "../../../redux/Planets/getPlanets"
import style from "../../../Styles/CardContainer.module.css"

import Planet from "../Card/CardPlanet";

const Planets = () => {
    const [page, setPage] = useState(1)

    const { data, status, isPreviousData } = useQuery(
        ["planet", page],
        () => getPlanets(page),
        { keepPreviousData: true},
        {
         onSuccess: () => console.log("Planets Data feched successfully"),
         onError: () => console.log("Error while fetching data of Planets"),
        }
    ) 

    return (
        <div className={style.container}>
            <h2 className={style.title}>Satr Wars - Planets</h2>
            {status === "loading" ? (
                <h1>Cargando...</h1>
            ) : status === "error" ? (
                <div>Error Data</div>
            ) : status === "success" ? (
                <div>
                    <div className={style.CardContainer}>
                        {data.results.map((planet) => (
                            <Planet key={planet.name} planet={planet}/>
                        ))}
                    </div>
                    <button 
                        onClick={() => setPage((old) => Math.min(old - 1, old))}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <span>{page}</span>
                    <button 
                        onClick={() => {if(!isPreviousData) {setPage((old) => old +1)}}}
                        disabled = {!data.next}
                    >
                        Next
                    </button>
                </div>
            ) : null}
        </div>
    )
}

export default Planets