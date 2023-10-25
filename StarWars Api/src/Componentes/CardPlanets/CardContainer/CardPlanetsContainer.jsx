import { useState } from "react";
import { useQuery } from "react-query";
import { getPlanets } from "../../../redux/Planets/getPlanets"

import Planet from "../Card/CardPlanet";
import Loader from "../../Loader"

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
        <>
            <h2>Planets</h2>
            {status === "loading" ? (
                <Loader/>
            ) : status === "error" ? (
                <div>Error Data</div>
            ) : status === "success" ? (
                <div>
                    <div>
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
                    {data.results.map((planet) => (
                        <Planet key={planet.name} planet={planet}/>
                    ))}
                </div>
            ) : null}

        </>
    )

}

export default Planets