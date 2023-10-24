import { useState } from "react";
import ListaPersonajes from "../../Componentes/ComponentePersonajes/ListaPersonajes";
import SearchBar from "../../Componentes/Search/SearchBar";

const Personajes = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (term) => {
        setSearch(term.toLowerCase())
    }

    return (
        <div>
            <h1>Aqui van a estar todos los personajes con paginación y filtros</h1>
            <SearchBar onSearch={handleSearch}/>
            <ListaPersonajes searchTerm={search}/>
        </div>
    )
}

export default Personajes;