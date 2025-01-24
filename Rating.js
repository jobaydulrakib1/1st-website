import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ maxRating, initialRating, onRatingChange }) => {
    const [currentRating, setCurrentRating] = useState(initialRating);

    const handleRating = (rating) => {
        setCurrentRating(rating);
        if (onRatingChange) {
            onRatingChange(rating);
        }
    };

    return (
        <div className="rating-container">
            {[...Array(maxRating)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <span
                        key={starRating}
                        className={`star ${starRating <= currentRating ? 'filled' : ''}`}
                        onClick={() => handleRating(starRating)}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

Rating.propTypes = {
    maxRating: PropTypes.number,
    initialRating: PropTypes.number,
    onRatingChange: PropTypes.func,
};

Rating.defaultProps = {
    maxRating: 5,
    initialRating: 0,
    onRatingChange: null,
};

export default Rating;
