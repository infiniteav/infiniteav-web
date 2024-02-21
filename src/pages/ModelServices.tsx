import '../styles/Textpage.css';

const ModelServices = () => {
    return (
        <>
            <div className="model-page model-container-list">
                <div className="model-container ava-container">
                    <img src="../../public/img/models/ava/ava00.png" alt="Ava" className="model-image"/>
                    <div className="model-details">
                        <h1>Ava</h1>
                        <h3>$60/hr</h3>
                    </div>
                </div>
                <div className="model-container trinidad-container">
                    <img src="../../public/img/models/trinidad/trinidad00.png" alt="Trinidad" className="model-image"/>
                    <div className="model-details">
                        <h1>Trinidad</h1>
                        <h3>$60/hr</h3>
                    </div>
                </div>
                <div className="model-container vana-container">
                    <img src="../../public/img/models/vana/vana00.png" alt="Vana" className="model-image"/>
                    <div className="model-details">
                        <h1>Vana</h1>
                        <h3>$60/hr</h3>
                    </div>
                </div>
                <div className="model-container kasi-container">
                    <img src="../../public/img/models/kasi/kasi00.png" alt="Kasi" className="model-image"/>
                    <div className="model-details">
                        <h1>Kasi</h1>
                        <h3>$60/hr</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelServices;
