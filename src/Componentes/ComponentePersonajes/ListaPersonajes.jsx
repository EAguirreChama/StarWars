import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPersonajes } from '../../Redux/Personajes/getPersonajes';
import { Link } from 'react-router-dom';

const ListaPersonajes = ({ searchTerm }) => {
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
        console.error('Error en el Componente Personajes', error);
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
        <h1>Personajes</h1>
        {people
        .filter((personaje) => personaje.name.toLowerCase().includes(searchTerm))
        .map((person) => (
          <div key={person.name}>
            <Link to={`/personaje/${extractIdFromUrl(person.url)}`}>{person.name}</Link>
          </div>
        ))}

        <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
        {pageButtons}
        <button onClick={handleNextPage}>Siguiente</button>
    </div>
  );
};

ListaPersonajes.propTypes = {
  searchTerm: PropTypes.string,  // Espera que searchTerm sea una cadena
};

export default ListaPersonajes;

const extractIdFromUrl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};