import React from 'react';
import PropTypes from 'prop-types';

const SecurityAlertModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Security Alert</h2>
                <p>{message}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

SecurityAlertModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
};

export default SecurityAlertModal;
