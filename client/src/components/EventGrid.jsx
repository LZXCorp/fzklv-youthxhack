import React from 'react';
import EventCard from './EventCard';

const EventGrid = ({ events }) => {
    return (
        <div className="event-grid">
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

export default EventGrid;
