import { useState, useEffect } from 'react';
import { getPersonajes } from '../../Redux/getPersonajes';

const ListaPersonajes = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleData = await getPersonajes(currentPage);
        setPeople(peopleData.results);
        setTotalPages(Math.ceil(peopleData.count /10))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

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
      {people.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}

      <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
      {pageButtons}
      <button onClick={handleNextPage}>Siguiente</button>
    </div>
  );
};

export default ListaPersonajes;