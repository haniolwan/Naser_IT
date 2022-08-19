import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';

import { useLocation } from 'react-router-dom'

export const StaticNavbar = () => {
    const { Link } = Nav;
    const { Item } = NavDropdown;
    const { Collapse, Toggle, Brand } = Navbar;
    const { pathname } = useLocation();
    return (
        <Navbar className="navbar navbar-dark py-4" expand="lg">
            <Container>
                <Brand href="#home">Naser IT</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <Link className={"text-light static-nav-link " + (pathname === '/' ? 'selected-static' : null)} href="/">Home</Link>
                        <Link className={"text-light static-nav-link " + (pathname.includes('services') ? 'selected-static' : null)} href="/services">Services</Link>
                        <Link className={"text-light static-nav-link " + (pathname === '/about' ? 'selected-static' : null)} href="/about">About Us</Link>
                        <Link className={"text-light static-nav-link " + (pathname === '/contact' ? 'selected-static' : null)} href="/contact">Contact Us</Link>
                        <NavDropdown className="ms-auto language-dropdown" title="English" id="basic-nav-dropdown">
                            <Item href="#action/3.1">English</Item>
                            <Item href="#action/3.3">German</Item>
                        </NavDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>)
}
