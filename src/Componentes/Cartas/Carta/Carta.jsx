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

export default Card