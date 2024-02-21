import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Contact from "./pages/Contact.tsx";
import VisualServices from "./pages/VisualServices.tsx";
import ModelServices from "./pages/ModelServices.tsx";
const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/visuals" element={<VisualServices />} />
                    <Route path="/models" element={<ModelServices />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
