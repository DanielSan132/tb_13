import { Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import Usuarios from "./pages/Usuarios"
import Equipamentos from "./pages/equipamentos"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
        </Routes>
    )
}

export default Router