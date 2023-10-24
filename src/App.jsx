import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Landing, Personajes, Naves, Planetas, Home} from "./Vistas/index"
import DetallePersonaje from "./Componentes/ComponentePersonajes/DetallePersonaje";
import NavBar from "./Componentes/NavBar/NavBar";

function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>

                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/personajes" element={<Personajes/>}/>
                    <Route exact path="/personaje/:id" element={<DetallePersonaje/>}/>
                    <Route exact path="/planetas" element={<Planetas/>}/>
                    <Route exact path="/naves" element={<Naves/>}/>

                    <Route path="*" element={<Landing/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;