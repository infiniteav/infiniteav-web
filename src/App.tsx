import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
