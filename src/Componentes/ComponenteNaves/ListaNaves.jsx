import { useEffect, useState } from "react";
import { getNaves } from "../../Redux/Naves/getNaves";
import { Link } from "react-router-dom";

const ListaNaves = () => {
    const [naves, setNaves] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const navesData = await getNaves(currentPage);
                setNaves(navesData.results);
                setTotalPages(Math.ceil(navesData.count / 10))
            } catch (error) {
                console.error("Error en el Componente Naves", error)
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
            <h1>Naves</h1>
            {naves.map((nave) => (
              <div key={nave.name}>
              <Link to={`/nave/${extractIdFromUrl(nave.url)}`}>{nave.name}</Link>
              </div>
            ))}

            <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
            {pageButtons}
            <button onClick={handleNextPage}>Siguiente</button>
        </div>
    );
};

export default ListaNaves

const extractIdFromUrl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};