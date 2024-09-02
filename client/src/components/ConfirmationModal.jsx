import React from 'react'
import '../assets/ConfirmationModal.css'

const ConfirmationModal = ({ message, onClose }) => {
    return (
        <div className="confirmation-modal">
            <div className="modal-content">
                <h2>Registration Successful</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ConfirmationModal
