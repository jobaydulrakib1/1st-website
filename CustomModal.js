import React from 'react';
import PropTypes from 'prop-types';

const CustomModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
};

CustomModal.defaultProps = {
    title: 'Modal Title',
};

export default CustomModal;
