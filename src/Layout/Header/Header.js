import Reacte,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import './header.scss'
import { Lang } from '../Layout';



function Header() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    const langContext = useContext(Lang)
   
    return (
       <header className="header">
         <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to='/' style={{ color: 'black' } }>Sarymogol</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/alltours'>{t("header.link2")}</Link></Nav.Link>

                        {/* info */}

                        <NavDropdown title={t("header.link3.link3_title")} id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/info'>{t("header.link3.link3")}</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/kg'>{t("header.link3.link3_kg")}</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/kz'>{t("header.link3.link3_kz")}</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/uz'>{t("header.link3.link3_uz")}</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/info/tj'>{t("header.link3.link3_tj")}</Link></NavDropdown.Item>                            
                        </NavDropdown>

                        <Nav.Link><Link to="/blog">{t("header.link4")}</Link></Nav.Link>
                        <Nav.Link><Link to="/faqs">{t("header.link5")}</Link></Nav.Link>
                        <Nav.Link><Link to="/aboutus">{t("header.link6")}</Link></Nav.Link>
                        <Nav.Link><Link to="/contactus">{t("header.link7")}</Link></Nav.Link>
                    </Nav>
                    <div className='header__btns'>
                            <button style={{background: i18n.language === 'ru' ? 'lightblue' : ''}} className='btn btn-primary' onClick={() => {changeLanguage('ru'); langContext.setBool(true);} } type='button'>Ru</button>
                            <button style={{background: i18n.language === 'en' ? 'lightblue' : ''}} className='btn btn-primary' onClick={() => {changeLanguage('en');langContext.setBool(false);} } type='button'>Eng</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </header>
    );
}

export default Header;