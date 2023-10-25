import { useState } from "react";
import { useQuery } from "react-query";
import { getStarships } from "../../../redux/Starships/getStarships"
import style from "../../../Styles/CardContainer.module.css"
import styleP from "../../../Styles/Paginacion.module.css"

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
            { status === "loading" ? (
                <div className={styleP.loading}>
                    <p>Loading...</p>
                </div>
            ) : status === "error" ? (
                <div>Error Data</div>
            ) : status === "success" ? (
                <div>
                    <div className={style.CardContainer}>
                        {data.results.map((starship) => (
                            <Starship key={starship.name} starship={starship}/>
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
                            onClick={() => {if(!isPreviousData) {setPage((old) => old +1)}}}
                            disabled = {!data.next}
                        >
                            Next Page
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Starships