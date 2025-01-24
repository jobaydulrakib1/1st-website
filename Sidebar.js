import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ items, isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="sidebar-close" onClick={onClose}>
                ×
            </button>
            <ul className="sidebar-items">
                {items.map((item, index) => (
                    <li key={index} className="sidebar-item">
                        <a href={item.href} className="sidebar-link">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

Sidebar.defaultProps = {
    isOpen: false,
    onClose: () => {},
};

export default Sidebar;
