import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { Navigate } from 'react-router'

import Index from './pages/Index'
import Events from './pages/Events'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Onboarding from './pages/Onboarding'
import RegistrationPage from './pages/RegistrationPage'

import event_list from "./assets/js/eventList"

function App() {
    const isOnboarded = localStorage.getItem('onboarded') ?? false

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* {isOnboarded ? ( */}
                <>
                    <Route path="/" element={<Index />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/profile" element={<Profile />} />
                    {event_list.map(event => (
                        <Route
                            key={event.name}
                            path={event.registrationLink}
                            element={<RegistrationPage event={event} />}
                        />
                    ))}
                    <Route path="/onboarding" element={<Onboarding />} />
                </>
                {/* ) : ( */}
                <>
                    {/* <Route path="/" element={<Onboarding />} /> */}
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}
                </>
                {/* )} */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
