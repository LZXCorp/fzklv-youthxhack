import { useState } from 'react'
import EventGrid from '../components/EventGrid'
import event_list from '../assets/eventList'
import '../assets/Events.css'

const EventsPage = () => {
    const profileData = {
        name: 'Alan Tan',
        dob: '1946-09-15',
        gender: 'Male',
        languages: ['zh-cn', 'nan'],
        disabilities: ['Hearing Loss'],
        phoneNumber: '+65 9876 5432',
        nextOfKinPhoneNumber: '+65 9123 4567',
    }

    // Filter events based on language and accessibility needs
    const recommendedEvents = event_list.filter(
        (event) =>
            event.languages.some((lang) =>
                profileData.languages.includes(lang)
            ) && event.accessibility.includes('hearing assistance')
    )

    const [registeredEvents, setRegisteredEvents] = useState([])

    const handleRegister = (event) => {
        setRegisteredEvents([...registeredEvents, event])
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
                events={event_list.map((event) => ({
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
