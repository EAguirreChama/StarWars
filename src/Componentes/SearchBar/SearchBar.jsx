import PropTypes from "prop-types"
import SearchBarStyles from "../../Styles/SearchBarStyles.module.css"

const SearchBar = ({ setUrl, setPage, tab, searchTerm, setSearchTerm }) => {
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className={SearchBarStyles.container}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Buscar por nombre"/>
            <button onClick={() => {
                setPage(1)
                setUrl(`https://swapi.dev/api/${tab}/?search=${searchTerm}&page=1`)}}>Buscar</button>
        </div>
    )
}

SearchBar.propTypes = {
    setUrl: PropTypes.func,
    setPage: PropTypes.func,
    tab: PropTypes.string,
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func,
}

export default SearchBar;