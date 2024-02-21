import '../styles/Textpage.css'

const VisualServices = () => {
    return (
        <div className="text-page">
            <div className="tiersList">
                <div className="tier 1">
                    <h2>$100</h2>
                    <li>2-4 week turnaround</li>
                    <li>1 location</li>
                    <li>1 hour shooting</li>
                    <br/>
                </div>
                <div className="tier 2">
                    <h2>$150</h2>
                    <li>1 week turnaround</li>
                    <li>1 location</li>
                    <li>1 hour shooting</li>
                    <br/>
                </div>
                <div className="tier 3">
                    <h2>$300</h2>
                    <li>includes a 1hr shoot with drone</li>
                    <li>1 location</li>
                    <li>2 hours filming</li>
                    <br/>
                </div>
            </div>
            <div className="extrasList">
                <h3>Extra Services</h3>
                <li>Extra Location: $30</li>
                <li>Extra hour filming: $50</li>
                <li>Photoshoot: $50</li>
                <li>Promo video varies</li>
                <br/>
            </div>
            <div className="bottomText">
                <h5>ALL BOOKING COMES WITH ONE FREE HOUR OF CONSULTATION</h5>
                <h5>CONTACT INFINITY 214.650.7827</h5>
            </div>
        </div>
    );
}

export default VisualServices;