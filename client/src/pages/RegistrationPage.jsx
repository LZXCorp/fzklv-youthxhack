import React, {useState} from 'react';
import languageMap from '../assets/languageMap';
import ConfirmationModal from '../components/ConfirmationModal';

const RegistrationPage = ({ event }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const languages = event.languages.map(code => languageMap[code] || code).join(', ');

    const handleFormSubmit = (e) => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="registration-page">
            <h2>Register for {event.name}</h2>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Date:</strong> {event.eventDate}</p>
            <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Contact:</strong> {event.organizerContact}</p>
            <p><strong>Availability:</strong> {event.availability} seats</p>
            <p><strong>Accessibility:</strong> {event.accessibility.join(', ')}</p>
            <p><strong>Languages:</strong> {languages}</p>
            <button className='register-button' onClick={handleFormSubmit}>Submit Registration</button>

            {isModalOpen && (
                <ConfirmationModal 
                    message="Thank you for registering! We will contact you with further details." 
                    onClose={closeModal} 
                />
            )}
        </div>
    );
};

export default RegistrationPage;
