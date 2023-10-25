import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import style from "../../../Styles/Card.module.css"

const Planet = ({ planet }) => {
    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
      };


    return (
        <Link to={`/planets/${extractIdFromUrl(planet.url)}`} className={style.Link}>
            <div className={style.card}>
                <h3>{planet.name}</h3>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
            </div>
        </Link>
    )
}

Planet.propTypes = {
    planet: PropTypes.object.isRequired
}

export default Planet;