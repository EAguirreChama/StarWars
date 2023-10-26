import { useEffect } from "react";
import { useQuery } from "react-query";
import { getData } from "../../Info/getData";
import DashboardStyle from "./DashBoardStyle.module.css"
import { Link } from "react-router-dom";

const people = "../../../public/People.png"
const planet = "../../../public/Planeta.png"
const starship = "../../../public/Nave.webp"

const Dashboard = () => {
    const { data: moviesData, status: moviesStatus } = useQuery(
        "movies",
        () => getData("https://swapi.dev/api/films/"),
        {
            onError: () => console.log("Error al obtener datos de películas"),
        }
    );

    useEffect(() => {
        // Aquí puedes realizar otras acciones cuando cambie la información de las películas
    }, [moviesData]);

    return (
        <div className={DashboardStyle.container}>
            <div className={DashboardStyle.containerThreeT}>
                <div className={DashboardStyle.cardChild}>
                    <div >
                        <h1>Residents</h1>
                        <p>82</p>
                    </div>
                    <img src={people} />
                </div>

                <div className={DashboardStyle.cardChild}>
                    <div>
                        <h1>Starships</h1>
                        <p>82</p>
                    </div>
                    <img src={starship} />
                </div>

                <div className={DashboardStyle.cardChild}>
                    <div>
                        <h1>Planets</h1>
                        <p>82</p>
                    </div>
                    <img src={planet} />
                </div>
            </div>

            <div className={DashboardStyle.containerTwoT}>
                <div className={DashboardStyle.films}>
                    {/* <h2>Films</h2> */}
                    {moviesStatus === "loading" ? (
                        <p>Cargando...</p>
                    ) : (
                        <div>
                            <ul>
                                {moviesData?.results.map((movie) => (
                                    <li key={movie.title}>
                                        <h1>{movie.title}</h1>
                                        <p >Director: {movie.director}</p>
                                        <p>Episodios: {movie.episode_id}</p>
                                        <p>Fecha de lanzamiento: {movie.release_date}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className={DashboardStyle.info}>
                    <h1>Mi Info</h1>
                    <a
                        href="https://github.com/EAguirreChama"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My GitHub Profile
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ernesto-aguirre-chama-a9a090269/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My LinkedIn Profile
                    </a>

                    <a
                        href="https://portafolio-ernesto-aguirre.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Portafolio
                    </a>
                    <Link to="/home" className={DashboardStyle.home}>
                        <button>Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;