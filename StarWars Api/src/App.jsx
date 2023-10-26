import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PersonDetail, PlanetDetail, StarshipDetail } from "./views/indexDetail"
import GeneralView from "./views/GeneralContainer"
import LandingView from "./views/LandingView/LandingView"
import DashBoardView from "./views/DashBoardView/DashBoardView"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingView />} />

          <Route exact path="/dashboard" element={<DashBoardView />} />
          <Route exact path="/home" element={<GeneralView />} />

          {/* Rutas para People */}
          <Route exact path="/people/:id" element={<PersonDetail />} />

          {/* Rutas para Planets */}
          <Route exact path="/planets/:id" element={<PlanetDetail />} />

          {/* Rutas para Naves */}
          <Route exact path="/starships/:id" element={<StarshipDetail />} />

          <Route path="*" element={<LandingView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App