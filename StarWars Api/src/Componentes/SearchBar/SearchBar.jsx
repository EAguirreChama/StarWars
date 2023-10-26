import { useState } from "react";
import PropTypes from "prop-types"

const SearchBar = ({ setUrl, setPage, tab }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // const handleSearch = async (search) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}${search}`)
    //         console.log(response.data);
    //         setPeople(response.data.results)
    //     } catch (error) {
    //         console.log('Error al obtener ese personaje', error);
    //         throw error
    //     }
    // }

    return (
        <div>
            <input type="text" value={search} onChange={handleChange} placeholder="Buscar por nombre"/>
            <button onClick={() => {
                setPage(1)
                setUrl(`https://swapi.dev/api/${tab}/?search=${search}&page=1`)}}>Buscar</button>
        </div>
    )
}

SearchBar.propTypes = {
    setUrl: PropTypes.func,
    setPage: PropTypes.func,
    tab: PropTypes.string,

}

export default SearchBar;