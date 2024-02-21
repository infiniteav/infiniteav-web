import { Link } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import '../styles/Navbar.css';

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#0C0F1E',
        // Add any other styles as needed
    };

    return (
        <BootstrapNavbar
            id="navbar"
            expand="lg"
            style={navbarStyle}
            variant="dark"
            className="py-3 fixed-top"
        >
            <div className="container">
                <Link to="/" className="navbar-brand">Infinite Films</Link>
                <BootstrapNavbar.Toggle aria-controls="navmenu"/>
                <BootstrapNavbar
                    id="navbar"
                    expand="lg"
                    style={navbarStyle}
                    variant="dark"
                    className="py-3 fixed-top"
                >
                    <div className="container">
                        <Link to="/" className="navbar-brand">Infinite Films</Link>
                        <BootstrapNavbar.Toggle aria-controls="navmenu"/>
                        <BootstrapNavbar.Collapse id="navmenu" className="custom-collapse">
                            <Nav className="ms-auto" data-bs-theme="dark">
                                <Nav.Link as={Link} to="/contact" className="me-3">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/visuals" className="me-3">Visual Services</Nav.Link>
                                <Nav.Link as={Link} to="/models" className="me-3">Model Services</Nav.Link>
                            </Nav>
                        </BootstrapNavbar.Collapse>
                    </div>
                </BootstrapNavbar>

            </div>
        </BootstrapNavbar>
    );
}

export default Navbar;
