import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/NavBar.module.css";
import PropTypes from "prop-types";

const NavBar = ({ activeTab, setTab }) => {
  const location = useLocation();

  const renderLink = (tab, text) => (
    <a onClick={() => setTab(tab)} className={styles.button}>
      {text}
    </a>
  );

  const isInHome = location.pathname === "/home";
  const isPeopleTab = activeTab === "people";
  const isPlanetsTab = activeTab === "planets";
  const isStarshipsTab = activeTab === "starships";

  return (
    <div className={styles.NavBarStyle}>
      <div>
        {isInHome && (
          <>
            {!isPeopleTab && renderLink("people", "People")}
            {!isPlanetsTab && renderLink("planets", "Planets")}
            {!isStarshipsTab && renderLink("starships", "Starships")}
          </>
        )}
        {!isInHome && renderLink("/", "Home")}
      </div>
      <div>
        <Link to="/" className={styles.button}>
          Salir
        </Link>
        <Link to="/dashboard" className={styles.button}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  setTab: PropTypes.func,
  activeTab: PropTypes.string,
};

export default NavBar;