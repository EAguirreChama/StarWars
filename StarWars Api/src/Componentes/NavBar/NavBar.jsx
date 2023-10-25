import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation()

    if(location.pathname === "/") return null

    return (
        <div>
            <Link to="/">Volver a Landing</Link>
            {location.pathname !== "/home"      && <Link to="/home">Ir a Home</Link>}
            {location.pathname !== "/people"    && <Link to="/people">People</Link>}
            {location.pathname !== "/planets"   && <Link to="/planets">Planets</Link>}
            {location.pathname !== "/starships" && <Link to="/starships">Starships</Link>}
        </div>
    )
}

export default NavBar;