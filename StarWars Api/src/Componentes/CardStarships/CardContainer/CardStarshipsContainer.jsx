import { useState } from "react";
import { useQuery } from "react-query";
import { getStarships } from "../../../redux/Starships/getStarships"

import Starship from "../Card/CardStarship";
import Loader from "../../Loader"

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
        <>
            <h2>Starships</h2>
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
                    {data.results.map((starship) => (
                        <Starship key={starship.name} starship={starship}/>
                    ))}
                </div>
            ) : null}

        </>
    )

}

export default Starships