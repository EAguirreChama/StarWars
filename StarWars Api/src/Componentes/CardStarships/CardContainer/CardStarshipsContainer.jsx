import { useState } from "react";
import { useQuery } from "react-query";
import { getStarships } from "../../../redux/Starships/getStarships"
import style from "../../../Styles/CardContainer.module.css"

import Starship from "../Card/CardStarship";

const Starships = () => {
    const [page, setPage] = useState(1)

    const { data, status, isPreviousData } = useQuery(
        ["starship", page],
        () => getStarships(page),
        { keepPreviousData: true},
        {
         onSuccess: () => console.log("Starships Data feched successfully"),
         onError: () => console.log("Error while fetching data of Starships"),
        }
    ) 

    return (
        <div className={style.container}>
            <h2 className={style.title}>Star Wars - Starships</h2>
            {status === "loading" ? (
                <h1>Cargando...</h1>
            ) : status === "error" ? (
                <div>Error Data</div>
            ) : status === "success" ? (
                <div>
                    <div className={style.CardContainer}>
                        {data.results.map((starship) => (
                            <Starship key={starship.name} starship={starship}/>
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

export default Starships