import { Link } from 'react-router-dom';
import LandindStyle from "./LandingView.module.css";

const Landing = () => {
    return (
        <div className={LandindStyle.container}>
            <h1>Welcome to Star Wars</h1>
            <Link to="/dashboard">
                <button className={LandindStyle.dashboardButton}>Ir al Dashboard</button>
            </Link>
        </div>
    );
}

export default Landing;