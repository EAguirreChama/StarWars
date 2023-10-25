import PropTypes from 'prop-types';
import style from "./Paginacion.module.css"

const Pagination = ({ personajesPorPag , totalPersonajes , clickPag , paginaActual }) => {

    const totalPages = Math.ceil(totalPersonajes / personajesPorPag);

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
    }

    return (
            <div className={style.paginationContainer}>
              <button
                className={style.paginationButton}
                onClick={() => {
                  if (paginaActual > 1) clickPag(paginaActual - 1);
                }}
              >
                Anterior
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => clickPag(pageNumber)}
                  className={`${style.numbers} ${paginaActual === pageNumber ? style.currentPage : ''}`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                className={style.paginationButton}
                onClick={() => {
                  if (paginaActual < totalPages) clickPag(paginaActual + 1);
                }}
              >
                Siguiente
              </button>
            </div>
    );
};

Pagination.propTypes = {
  personajesPorPag: PropTypes.number.isRequired,
  totalPersonajes: PropTypes.number.isRequired,
  clickPag: PropTypes.func.isRequired,
  paginaActual: PropTypes.number.isRequired,
};

export default Pagination;