import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import ellipseImg from '../../assets/ellipse.png';
import rectangleImg from '../../assets/rectangle.png';
import cursorImg from '../../assets/cursor.png';
import polygonImg from '../../assets/polygon.png';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { StaticNavbar } from '../common/Navbar/StaticNavbar';
import { StickyNavbar } from '../common/Navbar/StickyNavbar';
import { useWindowSize } from '../../hooks/useWindowSize';
import './style.css';
const Header = () => {
    const scrollPosition = useScrollPosition();
    const { width: windowWidth } = useWindowSize();
    return (
        <div className="header">
            {windowWidth > 1024 && <StaticNavbar />}
            {windowWidth <= 1024 ? <StickyNavbar /> : scrollPosition >= 30 ? <StickyNavbar /> : null}
            <img src={ellipseImg} className="img-fluid ellipse-image" alt="Header.jpg" />
            <img src={rectangleImg} className="img-fluid rectangle-image" alt="Header.jpg" />
            <img src={cursorImg} className="img-fluid cursor-image" alt="Header.jpg" />
            <img src={polygonImg} className="img-fluid polygon-image" alt="Header.jpg" />
            <Container>
                <Row className="content">
                    <Col className="right-content">
                        <div className="welcome-msg mb-4" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out">
                            👋 Welcome to Naser IT
                        </div>
                        <h1 className="title mb-4" data-aos="fade-up" data-aos-delay="700">
                            Work the way that works for you
                            <div className="aqua-line"></div>
                        </h1>
                        <h3 className="description" data-aos="fade-up" data-aos-delay="900">Create, Build, Collaborate and ship products very faster </h3>
                        <button type="button" className="btn btn-warning get-started-button" data-aos="fade-up" data-aos-delay="1100">Get Started</button>
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