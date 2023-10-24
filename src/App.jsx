import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./Vistas/Landing"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>

                    <Route path="*" element={<Landing/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;