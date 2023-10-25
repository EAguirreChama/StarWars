import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { LandingView, PersonajesView, NavesView, PlanetasView, HomeView} from "./views/index"

import NavBar from "./Componentes/NavBar/NavBar";

function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<LandingView/>}/>

                    {/* Rutas a Home */}
                    <Route exact path="/home" element={<HomeView/>}/>
                    
                    {/* Rutas de Personajes */}
                    <Route exact path="/personajes" element={<PersonajesView/>}/>

                    {/* Rutas de Planetas */}
                    <Route exact path="/planetas" element={<PlanetasView/>}/>

                    {/* Rutas de Naves */}
                    <Route exact path="/naves" element={<NavesView/>}/>

                    <Route path="*" element={<LandingView/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;