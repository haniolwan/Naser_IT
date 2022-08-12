import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';

export const StickyNavbar = () => {
    const { Link } = Nav;
    const { Item } = NavDropdown;
    const { Collapse, Toggle, Brand } = Navbar;

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
                        <Link className="sticky-link" href="/">Home</Link>
                        <Link className="sticky-link" href="/services">Services</Link>
                        <Link className="sticky-link" href="/about">About Us</Link>
                        <Link className="sticky-link" href="/contact">Contact Us</Link>
                        <NavDropdown className="ms-auto language-dropdown" title="English" id="basic-nav-dropdown">
                            <Item href="#action/3.1">English</Item>
                            <Item href="#action/3.3">German</Item>
                        </NavDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>)
}
