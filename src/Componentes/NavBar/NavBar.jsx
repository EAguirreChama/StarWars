import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <div>
                <Link to="/personajes">Ir a los Personajes</Link>
                {location.pathname !== "/naves" && (<Link to="/naves">Ir a Naves</Link>)}
                {location.pathname !== "/planetas" && (<Link to="/planetas">Ir a Planetas</Link>)}
            </div>
            <Link to="/" className={styles.logo}>
                <img src="../../../public/logo.svg"/>
            </Link>
        </div>
    )
}

export default NavBar;