import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import LanguageToggle from "./components/LanguageToggle";
// import Text from "./components/Text";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    )
}



export default App
