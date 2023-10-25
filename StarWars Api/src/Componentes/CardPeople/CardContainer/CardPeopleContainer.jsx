import { useState } from "react";
import { useQuery } from "react-query";
import { getPeople } from "../../../redux/People/getPeople";
import style from "./CardPeopleContainer.module.css"

import Person from "../Card/CardPerson";

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
        <div className={style.container}>
            <h2 className={style.title}>Star Wars - People</h2>
            {status === "loading" ? (
                <h1>Cargando...</h1>
            ) : status === "error" ? (
                <div>Error Data</div>
            ) : status === "success" ? (
                <div>
                    <div className={style.CardContainer}>
                        {data.results.map((person) => (
                            <Person 
                                key={person.name} 
                                person={person}
                            />
                        ))}
                    </div>
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
                </div>
            ) : null}

        </div>
    )

}

export default People