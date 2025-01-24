import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <img
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="user-avatar"
            />
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-role">Role: {user.role}</p>
        </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        avatar: PropTypes.string,
    }).isRequired,
};

UserProfile.defaultProps = {
    user: {
        avatar: 'https://via.placeholder.com/150', // Default avatar URL
    },
};

export default UserProfile;
