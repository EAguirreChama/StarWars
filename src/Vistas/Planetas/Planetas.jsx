import { useState } from "react";
import ListaPlanetas from "../../Componentes/ComponentePlanetas/ListaPlanetas";
import SearchBar from "../../Componentes/Search/SearchBar";

const Planetas = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (term) => {
        setSearch(term.toLowerCase())
    }
    return (
        <div>
            <h1>Aqui van a estar todos los planetas con paginación</h1>
            <SearchBar onSearch={handleSearch}/>
            <ListaPlanetas searchTerm={search}/>
        </div>
    )
}

export default Planetas;