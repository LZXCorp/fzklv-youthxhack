import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Events from "./pages/Events";
import Navbar from "./pages/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </BrowserRouter>
    )
}



export default App
