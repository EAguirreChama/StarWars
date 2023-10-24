import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <div>
            <Link to="/personajes">Ir a los Personajes</Link>

            {/* {location.pathname !== "/home" && (<Link to="/home">Ir a Home</Link>)} */}
            {location.pathname !== "/naves" && (<Link to="/naves">Ir a Naves</Link>)}
            {location.pathname !== "/planetas" && (<Link to="/planetas">Ir a Planetas</Link>)}
        </div>
    )
}

export default NavBar;