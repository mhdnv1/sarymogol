import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './header.scss'

function Header() {
    return (
       <header className="header">
         <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to='/' style={{ color: 'black' }}>Sarymogol</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to='/alltours'>All Tours</Link></Nav.Link>

                        {/* info */}

                        <NavDropdown title="Info" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/info'>Essential information</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/kg'>Kyrgyzstan</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/kz'>Kazakhstan</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/uz'>Uzbekstan</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/tj'>Tajikistan</Link></NavDropdown.Item>                            
                        </NavDropdown>

                        <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link><Link to="/faqs">Faqs</Link></Nav.Link>
                        <Nav.Link><Link to="/aboutus">About us</Link></Nav.Link>
                        <Nav.Link><Link to="/contactus">Contact us</Link></Nav.Link>
                    </Nav>
                    <select>
                        <option value="ru" key="ru">Ru</option>
                        <option value="eng" key="eng">Eng</option>
                    </select>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </header>
    );
}

export default Header;