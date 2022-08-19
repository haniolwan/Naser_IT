import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

export const StickyNavbar = () => {
    const { Link } = Nav;
    const { Item } = NavDropdown;
    const { Collapse, Toggle, Brand } = Navbar;
    const { pathname } = useLocation();

    return (
        <Navbar
            className="navbar navbar-expand-lg navbar-light py-4 bg-light shadow fixed-top sticky-navbar"
            expand="lg"
            data-aos="fade-down">
            <Container className="bg-light">
                <Brand href="#home">Naser IT</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <Link className={"sticky-link " + (pathname === '/' ? 'selected-sticky' : null)} href="/">Home</Link>
                        <Link className={"sticky-link " + (pathname.includes('services') ? 'selected-sticky' : null)} href="/services">Services</Link>
                        <Link className={"sticky-link " + (pathname === '/about' ? 'selected-sticky' : null)} href="/about">About Us</Link>
                        <Link className={"sticky-link " + (pathname === '/contact' ? 'selected-sticky' : null)} href="/contact">Contact Us</Link>
                        <NavDropdown className="ms-auto language-dropdown" title="English" id="basic-nav-dropdown">
                            <Item href="#action/3.1">English</Item>
                            <Item href="#action/3.3">German</Item>
                        </NavDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>)
}
