import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { Navigate } from 'react-router'

import Index from './pages/Index'
import Events from './pages/Events'
import Navbar from './pages/Navbar'
import Onboarding from './pages/Onboarding'

function App() {
    const isOnboarded = localStorage.getItem('onboarded') ?? false

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {isOnboarded ? (
                    <>
                        <Route path="/" element={<Index />} />
                        <Route path="/events" element={<Events />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Onboarding />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default App
