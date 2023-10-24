import { Link } from "react-router-dom"
import './Landing.css';

const Landing = () => {
    return (
        <div className="container"> 
            <div>
                <h1 className="title">Bienvenidos</h1>
            </div>

            <Link to="/home">
                <button to ="/home" className="button">
                    Iniciemos
                </button>
            </Link>

        </div>
    )
}

export default Landing;