import React from 'react';
import PropTypes from 'prop-types';

const VideoPreview = ({ video }) => {
    return (
        <div className="video-preview">
            <video 
                className="video-preview-player" 
                src={video.url} 
                controls 
                poster={video.thumbnail} 
                alt={video.title}
            >
                Your browser does not support the video tag.
            </video>
            <div className="video-preview-details">
                <h3 className="video-preview-title">{video.title}</h3>
                <p className="video-preview-description">{video.description}</p>
            </div>
        </div>
    );
};

VideoPreview.propTypes = {
    video: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
    }).isRequired,
};

VideoPreview.defaultProps = {
    video: {
        description: 'No description available.',
        thumbnail: 'https://via.placeholder.com/150',
    },
};

export default VideoPreview;
