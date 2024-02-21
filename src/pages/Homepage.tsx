import React from 'react';
import '../App.css';

const Homepage = () => {
    return (
        <div className="homepage-youtube-iframe-container">
            <iframe
                className="homepage-youtube-iframe"
                src="https://www.youtube.com/embed/videoseries?si=SkJKLaM7PZNZBmVk&amp;list=PL3g8ldsMhMADIHoiNPHfu_qzwA0dM-IQQ"
                title="Infinite Films"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Homepage;

