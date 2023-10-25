import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Person = ({ person }) => {
    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
      };


    return (
        <div>
            <h3>
                <Link to={`/people/${extractIdFromUrl(person.url)}`}>
                    {person.name}
                </Link>
            </h3>
        </div>
    )
}

Person.propTypes = {
    person: PropTypes.object.isRequired
}

export default Person;