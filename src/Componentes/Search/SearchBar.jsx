import { useState } from "react";
import PropTypes from 'prop-types'

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        onSearch(search)
    }
    return (
        <div>
            <input type="text" value={search} onChange={handleChange} placeholder="Buscar por nombre"/>
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired, // Espera que onSearch sea una función y sea requerida
};

export default SearchBar