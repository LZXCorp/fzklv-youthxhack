import '../assets/css/ConfirmationModal.css';

const ConfirmationModal = ({ message, onClose }) => {
    return (
        <div className="confirmation-modal">
            <div className="modal-content">
                <h2>Registration Successful</h2>
                <p>{message}</p>
                <br></br>

                <h3>Options</h3>
                <div className="button-group">
                    <p>Travel by yourself to the location</p>
                    <button onClick={onClose}>Independent Travel</button>

                    <p>Travel with your community, and with volunteers</p>
                    <button onClick={onClose}>Group Travel</button>

                    <p>Automatically book a vehicle</p>
                    <button onClick={onClose}>Private Hire</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
