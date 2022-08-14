import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';

export const StaticNavbar = () => {
    const { Link } = Nav;
    const { Item } = NavDropdown;
    const { Collapse, Toggle, Brand } = Navbar;
    return (
    <Navbar className="navbar navbar-dark py-4" expand="lg">
        <Container>
            <Brand href="#home">Naser IT</Brand>
            <Toggle aria-controls="basic-navbar-nav" />
            <Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-items">
                    <Link className="text-light static-nav-link" href="/">Home</Link>
                    <Link className="text-light static-nav-link" href="/services">Services</Link>
                    <Link className="text-light static-nav-link" href="/about">About Us</Link>
                    <Link className="text-light static-nav-link" href="/contact">Contact Us</Link>
                    <NavDropdown className="ms-auto language-dropdown" title="English" id="basic-nav-dropdown">
                        <Item href="#action/3.1">English</Item>
                        <Item href="#action/3.3">German</Item>
                    </NavDropdown>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>)
}
