import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className, disabled }) => {
    return (
        <button 
            className={`custom-button ${className}`} 
            onClick={onClick} 
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    className: '',
    disabled: false,
};

export default Button;
