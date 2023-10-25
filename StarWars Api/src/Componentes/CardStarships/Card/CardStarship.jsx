import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import style from "../../../Styles/Card.module.css"

const Starship = ({ starship }) => {
    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
      };


    return (
        <Link to={`/starships/${extractIdFromUrl(starship.url)}`} className={style.Link}>
            <div className={style.card}>
                <h3>{starship.name}</h3>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Passengers: {starship.passengers}</p>
            </div>
        </Link>
    )
}

Starship.propTypes = {
    starship: PropTypes.object.isRequired
}

export default Starship;