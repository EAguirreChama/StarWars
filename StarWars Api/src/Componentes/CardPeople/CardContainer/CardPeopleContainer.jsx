import { useState } from "react";
import { useQuery } from "react-query";
import { getPeople } from "../../../redux/People/getPeople";
import style from "../../../Styles/CardContainer.module.css"
import styleP from "../../../Styles/Paginacion.module.css"

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
            {status === "loading" ? (
                <div className={styleP.loading}>
                    <p>Loading...</p>
                </div>
            ) : status === "error" ? (
                <div>Error Data</div>
            ) : status === "success" ? (
                <div>
                    <div className={style.CardContainer}>
                        {data.results.map((person) => (
                            <Person key={person.name} person={person}/>
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

export default People