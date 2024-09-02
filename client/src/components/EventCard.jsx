import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.thumbnail} alt={`${event.name} Thumbnail`} className="event-thumbnail" />
            <div className="event-details">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p><strong>Date:</strong> {event.eventDate}</p>
                <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Languages:</strong> {event.languages.join(', ')}</p>
                <p><strong>Contact:</strong> {event.organizerContact}</p>
                <p><strong>Availability:</strong> {event.availability} seats</p>
                <p><strong>Accessibility:</strong> {event.accessibility.join(', ')}</p>
                <button disabled={!event.isRegistrationOpen}>
                    {event.isRegistrationOpen ? 'Register Now' : 'Registration Closed'}
                </button>
            </div>
        </div>
    );
};

export default EventCard;
