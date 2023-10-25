import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({name}) => {
    return (
        <div>
            <Link>
                <p>{ name }</p>
            </Link>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Card