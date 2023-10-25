import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import style from "../../../Styles/Card.module.css"

const Person = ({ person }) => {
    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
      };


    return (
        <Link to={`/people/${extractIdFromUrl(person.url)}`} className={style.Link}>
            <div className={style.card}>
                <h3>{person.name}</h3>
                <p>{person.gender}</p>
                <p>{person.birth_year}</p>
            </div>
        </Link>
    )
}

Person.propTypes = {
    person: PropTypes.object.isRequired
}

export default Person;