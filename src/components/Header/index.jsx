import { NavDropdown, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './style.css';
// import headerImg from '../../assets/headerImg.jpg';
import ellipseImg from '../../assets/ellipse.png';
import rectangleImg from '../../assets/rectangle.png';
import cursorImg from '../../assets/cursor.png';
import polygonImg from '../../assets/polygon.png';


const { Link } = Nav;
const { Item, Divider } = NavDropdown;
const { Collapse, Toggle, Brand } = Navbar;
const Header = () => {
    return (
        <div className="header">
            <Navbar className="navbar navbar-dark py-4" expand="lg">
                <Container>
                    <Brand href="#home">Naser IT</Brand>
                    <Toggle aria-controls="basic-navbar-nav" />
                    <Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Link href="#home">Home</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#about">About Us</Link>
                            <Link href="#contact">Contact Us</Link>
                            <NavDropdown className="ms-auto language-dropdown" title="English" id="basic-nav-dropdown">
                                <Item href="#action/3.1">English</Item>
                                <Item href="#action/3.3">German</Item>
                                {/* <Divider /> */}
                            </NavDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <img src={ellipseImg} class="img-fluid ellipse-image" alt="Header.jpg" />
            <img src={rectangleImg} class="img-fluid rectangle-image" alt="Header.jpg" />
            <img src={cursorImg} class="img-fluid cursor-image" alt="Header.jpg" />
            <img src={polygonImg} class="img-fluid polygon-image" alt="Header.jpg" />
            <Container >
                <Row className="content">
                    <Col className="right-content">
                        <div className="welcome-msg mb-4">
                            👋 Welcome to Naser IT
                        </div>
                        <h1 className="title mb-4">Work the way that works for you
                            <div className="aqua-line"></div>
                        </h1>
                        <h3 className="description">Create, Build, Collaborate and ship products very faster </h3>
                        <button type="button" class="btn btn-warning get-started-button">Get Started</button>
                    </Col>
                    <Col className="left-content">
                        {/* <img src={headerImg} class="img-fluid header-image" alt="Header.jpg" /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;