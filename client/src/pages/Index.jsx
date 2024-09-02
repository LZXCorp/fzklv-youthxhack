import Navbar from './Navbar'
import '../assets/index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
