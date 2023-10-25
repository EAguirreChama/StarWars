import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Planet = ({ planet }) => {
    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
      };


    return (
        <div>
            <h3>
                <Link to={`/planets/${extractIdFromUrl(planet.url)}`}>
                    {planet.name}
                </Link>
            </h3>
        </div>
    )
}

Planet.propTypes = {
    planet: PropTypes.object.isRequired
}

export default Planet;