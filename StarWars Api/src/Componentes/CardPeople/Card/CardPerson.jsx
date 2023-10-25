import PropTypes from "prop-types"

const Person = ({ person }) => {
    return (
        <div>
            <h3>{person.name}</h3>
        </div>
    )
}

Person.propTypes = {
    person: PropTypes.object.isRequired
}

export default Person;