import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <div>
                <h1>Bienvenidos a StarWars</h1>
                <Link to="/home">
                    <button to ="/home">Iniciemos</button>
                </Link>
                <h5>Presiona para ir</h5>
            </div>
        </div>
    )
}

export default Landing;