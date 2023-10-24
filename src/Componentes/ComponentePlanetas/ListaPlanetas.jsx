import { useEffect, useState } from "react";
import { getPlanetas } from "../../Redux/getPlanetas"

const ListaPlanetas = () => {
    const [planetas, setPlanetas] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const planetasData = await getPlanetas(currentPage);
                setPlanetas(planetasData.results);
                setTotalPages(Math.ceil(planetasData.count / 10))
            } catch (error) {
                console.error("Error en el Componente Planetas", error)
            }
        }
        fetchData()
    }, [currentPage])

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      };
    
      const handleGoToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const pageButtons = [];
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button key={i} onClick={() => handleGoToPage(i)} disabled={currentPage === i}>
            {i}
          </button>
        );
      }

    return (
        <div>
            <h1>Planetas</h1>
            {planetas.map((planeta) => (
                <div key={planeta.name}>{planeta.name}</div>
            ))}

            <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
            {pageButtons}
            <button onClick={handleNextPage}>Siguiente</button>
        </div>
    )
}

export default ListaPlanetas