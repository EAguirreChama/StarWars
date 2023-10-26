import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PersonDetail, PlanetDetail, StarshipDetail, GeneralView, Landing, Dashboard } from "./views/indexDetail"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing/>} />

          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/home" element={<GeneralView />} />

          {/* Rutas para People */}
          <Route exact path="/people/:id" element={<PersonDetail />} />

          {/* Rutas para Planets */}
          <Route exact path="/planets/:id" element={<PlanetDetail />} />

          {/* Rutas para Naves */}
          <Route exact path="/starships/:id" element={<StarshipDetail />} />

          <Route path="*" element={<Landing/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App