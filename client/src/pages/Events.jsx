import React, { useState } from 'react';
import EventGrid from '../components/EventGrid';
import event_list from '../assets/eventList'; // Adjust the path as necessary
import "../assets/Events.css"

const EventsPage = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);

    const handleRegister = (event) => {
        setRegisteredEvents([...registeredEvents, event]);
    };

    return (
        <div className="events-page">
            <h1>Available Events</h1>
            <EventGrid 
                events={event_list.map(event => ({
                    ...event,
                    onRegister: () => handleRegister(event),
                }))} 
            />

            {registeredEvents.length > 0 && (
                <div className="registered-events">
                    <h2>Registered Events</h2>
                    <EventGrid 
                        events={registeredEvents.map(event => ({
                            ...event,
                            isRegistrationOpen: false // Pass the isRegistered prop as true
                        }))} 
                    />
                </div>
            )}
        </div>
    );
};

export default EventsPage;
