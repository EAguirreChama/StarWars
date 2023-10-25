import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    const location = useLocation()

    if(location.pathname === "/") return null

    return (
        <div className={style.NavBarStyle}>
            <div>
                {location.pathname !== "/home"      && <Link to="/home">Home</Link>}
                {location.pathname !== "/people"    && <Link to="/people">People</Link>}
                {location.pathname !== "/planets"   && <Link to="/planets">Planets</Link>}
                {location.pathname !== "/starships" && <Link to="/starships">Starships</Link>}
            </div>
            <h1>STAR WARS - API</h1>
            <Link to="/">Salir</Link>
        </div>
    )
}

export default NavBar;