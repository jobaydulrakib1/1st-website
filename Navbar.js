import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ links, brandName }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">{brandName}</a>
            </div>
            <ul className="navbar-links">
                {links.map((link, index) => (
                    <li key={index} className="navbar-item">
                        <a href={link.href} className="navbar-link">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    brandName: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    brandName: 'MyBrand',
};

export default Navbar;
