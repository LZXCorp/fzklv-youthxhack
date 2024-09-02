import React, { useState } from 'react';
import languageMap from '../assets/languageMap';
import ConfirmationModal from './ConfirmationModal';

const EventCard = ({ event, isRegistered }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        if (event.onRegister && !isRegistered) {
            event.onRegister(); // Only register if it's not already registered
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const languages = event.languages.map(code => languageMap[code] || code).join(', ');

    return (
        <div className="event-card">
            <img src={event.thumbnail} alt={`${event.name} Thumbnail`} className="event-thumbnail" />
            <div className="event-details">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p><strong>Date:</strong> {event.eventDate}</p>
                <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Languages:</strong> {languages}</p>
                <p><strong>Contact:</strong> {event.organizerContact}</p>
                <p><strong>Availability:</strong> {event.availability} seats</p>
                <p><strong>Accessibility:</strong> {event.accessibility.join(', ')}</p>
                {!isRegistered && (
                    <a
                        onClick={openModal}
                        className={`register-button ${!event.isRegistrationOpen ? 'disabled' : ''}`}
                    >
                        {event.isRegistrationOpen ? 'Register Now' : 'Registration Closed'}
                    </a>
                )}
                {isModalOpen && (
                    <ConfirmationModal
                        message="Thank you for registering! We will contact you with further details."
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
};

export default EventCard;
