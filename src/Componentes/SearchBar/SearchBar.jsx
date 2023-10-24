import styles from "./SearchBar.module.css"

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Buscar por Nombre"/>
            <button></button>
        </div>
    )
}

export default SearchBar