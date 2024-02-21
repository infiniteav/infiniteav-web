import '../styles/Textpage.css';

const ModelServices = () => {
    return (
        <>
            <div className="text-page model-container-list">
                <div className="model-container ava-container">
                    <img src="../../public/img/models/ava/ava00.png" alt="Ava" className="model-image" />
                    <div className="model-details">
                        <h1>Ava</h1>
                        <h3>$60/hr</h3>
                    </div>
                </div>
                <div className="model-container">
                    {/* Repeat the same structure for additional model containers */}
                </div>
                <div className="model-container">
                    {/* Repeat the same structure for additional model containers */}
                </div>
            </div>
        </>
    );
}

export default ModelServices;
