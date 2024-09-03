import { useState } from 'react'
import EventGrid from '../components/EventGrid'
import event_list from '../assets/js/eventList'
import '../assets/css/Events.css'
import profileData from '../assets/js/profileData'

const EventsPage = () => {
    const [availableEvents, setAvailableEvents] = useState(event_list)
    const [registeredEvents, setRegisteredEvents] = useState([])
    const [recommendedEvents, setRecommendedEvents] = useState(
        getRecommendedEvents(event_list)
    )

    function getRecommendedEvents(events) {
        return events.filter(
            (event) =>
                event.languages.some((lang) =>
                    profileData.languages.includes(lang)
                ) && event.accessibility.includes('hearing assistance')
        )
    }

    const handleRegister = (event) => {
        setRegisteredEvents([...registeredEvents, event])
        setAvailableEvents(availableEvents.filter((e) => e.name !== event.name))
        setRecommendedEvents(
            getRecommendedEvents(
                availableEvents.filter((e) => e.name !== event.name)
            )
        )
    }

    return (
        <div className="events-page">
            <h1>Events</h1>

            {recommendedEvents.length > 0 && (
                <div className="recommended-events">
                    <h2>Recommended Events for You</h2>
                    <EventGrid
                        events={recommendedEvents.map((event) => ({
                            ...event,
                            onRegister: () => handleRegister(event),
                            isRegistered: false,
                        }))}
                    />
                </div>
            )}

            <h2>Available Events</h2>
            <EventGrid
                events={availableEvents.map((event) => ({
                    ...event,
                    onRegister: () => handleRegister(event),
                    isRegistered: false,
                }))}
            />

            {registeredEvents.length > 0 && (
                <div className="registered-events">
                    <h2>Registered Events</h2>
                    <EventGrid
                        events={registeredEvents.map((event) => ({
                            ...event,
                            isRegistered: true,
                        }))}
                    />
                </div>
            )}
        </div>
    )
}

export default EventsPage
