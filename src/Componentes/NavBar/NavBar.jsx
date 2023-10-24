import { Link, useLocation} from "react-router-dom";

const NavBar = () => {
    const location = useLocation()

    if (location.pathname === "/") {
        return null;
    }

    return (
        <div>
            <Link to="/">Volver a Landing</Link>
            {location.pathname !== "/home" && <Link to="/home">Ir a Home</Link>}
            {location.pathname !== "/personajes" && <Link to="/personajes">Personajes</Link>}
            {location.pathname !== "/planetas" && <Link to="/planetas">Planetas</Link>}
            {location.pathname !== "/naves" && <Link to="/naves">Naves</Link>}
        </div>
    )
}

export default NavBar