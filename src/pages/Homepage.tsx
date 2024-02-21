import '../App.css';

const Homepage = () => {
    return (
        <div className="homepage-document-flow">
            <div className="homepage-youtube-iframe-container">
                <iframe
                    className="homepage-youtube-iframe"
                    src="https://www.youtube.com/embed/videoseries?si=SkJKLaM7PZNZBmVk&amp;list=PL3g8ldsMhMADIHoiNPHfu_qzwA0dM-IQQ"
                    title="Infinite Films"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Homepage;

