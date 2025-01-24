import React from 'react';
import PropTypes from 'prop-types';
import VideoPreview from './VideoPreview';

const VideoLibrary = ({ videos }) => {
    return (
        <div className="video-library">
            <h2 className="video-library-title">Video Library</h2>
            <div className="video-library-grid">
                {videos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

VideoLibrary.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            thumbnail: PropTypes.string,
        })
    ).isRequired,
};

export default VideoLibrary;
