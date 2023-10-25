import { useState } from "react";
import { useQuery } from "react-query";
import { getPeople } from "../../../redux/People/getPeople";

import Person from "../Card/CardPerson";
import Loader from "../../Loader"

const People = () => {
    const [page, setPage] = useState(1)

    const { data, status, isPreviousData } = useQuery(
        ["people", page],
        () => getPeople(page),
        { keepPreviousData: true},
        {
         onSuccess: () => console.log("People Data feched successfully"),
         onError: () => console.log("Error while fetching data of People"),
        }
    ) 

    return (
        <>
            <h2>People</h2>
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
                    {data.results.map((person) => (
                        <Person key={person.name} person={person}/>
                    ))}
                </div>
            ) : null}

        </>
    )

}

export default People