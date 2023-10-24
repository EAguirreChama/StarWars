import NavBar from "../../Componentes/NavBar/NavBar";
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Aqui va a estar todo el contenido</h1>
            <NavBar/>
        </div>
    )
}

export default Home;