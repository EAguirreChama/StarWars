import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

  // Función para obtener el título según la ruta
  const getTitle = () => {
    switch (location.pathname) {
      case "/home":
        return "STAR WARS - API";
      case "/people":
        return "STAR WARS - PEOPLE";
      case "/planets":
        return "STAR WARS - PLANETS";
      case "/starships":
        return "STAR WARS - STARSHIPS";
      default:
        return "STAR WARS - API"; // Valor predeterminado para rutas desconocidas
    }
  };

  if (location.pathname === "/") return null;

  return (
    <div className={style.NavBarStyle}>
      <div>
        {location.pathname !== "/home" && <Link to="/home">Home</Link>}
        {location.pathname !== "/people" && <Link to="/people">People</Link>}
        {location.pathname !== "/planets" && <Link to="/planets">Planets</Link>}
        {location.pathname !== "/starships" && <Link to="/starships">Starships</Link>}
      </div>
      <h1 className={style.title}>{getTitle()}</h1>
      <Link to="/">Salir</Link>
    </div>
  );
};

export default NavBar;