import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Landing, Personajes, Naves, Planetas} from "./Vistas/index"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/personajes" element={<Personajes/>}/>
                    <Route exact path="/naves" element={<Naves/>}/>
                    <Route exact path="/planetas" element={<Planetas/>}/>

                    <Route path="*" element={<Landing/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;