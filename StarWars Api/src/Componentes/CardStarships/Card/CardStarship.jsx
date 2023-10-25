import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Starship = ({ starship }) => {
    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
      };


    return (
        <div>
            <h3>
                <Link to={`/starships/${extractIdFromUrl(starship.url)}`}>
                    {starship.name}
                </Link>
            </h3>
        </div>
    )
}

Starship.propTypes = {
    starship: PropTypes.object.isRequired
}

export default Starship;