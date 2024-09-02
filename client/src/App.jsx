import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
// import LanguageToggle from "./components/LanguageToggle";
// import Text from "./components/Text";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </BrowserRouter>
    )
}



export default App
