import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { LandingView, HomeView, PeopleView, PlanetsView, StarshipsView} from "./views/index"
import { PersonDetail } from "./views/indexDetail"
import NavBar from "./Componentes/NavBar/NavBar"

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/"           element={<LandingView/>}/>
          
          <Route exact path="/home"       element={<HomeView/>}/>

          {/* Rutas para People */}
          <Route exact path="/people"     element={<PeopleView/>}/>
          <Route exact path="/people/:id"  element={<PersonDetail/>}/>

          <Route exact path="/planets"    element={<PlanetsView/>}/>

          <Route exact path="/starships"  element={<StarshipsView/>}/>

          <Route path="*" element={<LandingView/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App