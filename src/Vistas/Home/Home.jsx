import NavBar from "../../Componentes/NavBar/NavBar";
import styles from "./Home.module.css"
import Personajes from "../Personajes/Personajes";
import Naves from "../Naves/Naves"
import Planetas from "../Planetas/Planetas"

const Home = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Aqui va a estar todo el contenido</h1>
            <NavBar/>
            <Personajes/>
            <Naves/>
            <Planetas/>
        </div>
    )
}

export default Home;