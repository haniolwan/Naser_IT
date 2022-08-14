import {
    Footer,
} from '../..';
import {
    Col,
    Row,
    Container
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { StaticNavbar } from '../../common/Navbar/StaticNavbar';
import { StickyNavbar } from '../../common/Navbar/StickyNavbar';
import rightArrowImg from '../../../assets/angle-right-.svg';
import computerImg from './../../../assets/computer.png';
import webDesign from '../../../assets/web-design.jpg';
const AboutUs = () => {
    let navigate = useNavigate();

    const scrollPosition = useScrollPosition();
    const { width: windowWidth } = useWindowSize();
    return (
        <>
            <div className="services-page-container">
                {windowWidth > 1024 && <StaticNavbar />}
                {windowWidth <= 1024 ? <StickyNavbar /> : scrollPosition >= 30 ? <StickyNavbar /> : null}
                <div className="heading-text">
                    <h1>About Us</h1>
                    <p>
                        <span className="home-link" onClick={() => navigate('/')}>Home</span>
                        <img className="right-arrow" src={rightArrowImg} alt="SP.png" />
                        About us
                    </p>
                </div>
            </div>
            <Container>
                <Row className="processes-header-content">
                    <Col className="services-left-content">
                        <div className="services-header">
                            <h1 className="services-header-text">NASER IT</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi fermentum placerat leo, quis imperdiet odio ullamcorper at.
                                Sed lacinia neque at nisl condimentum vestibulum.
                                Aenean aliquet lorem vitae ex rhoncus condimentum.
                                Cras blandit dui a porta malesuada. Nulla et elit ante.
                                Morbi egestas velit vel feugiat condimentum. Aliquam erat volutpat.
                            </p>
                            <ul>
                                <li>
                                    <img className="list-icons" src={computerImg} alt="services.png" />
                                    One design for your desktop, tab and mobile.
                                </li>
                                <li>
                                    <img className="list-icons" src={computerImg} alt="services.png" />
                                    Beautiful and modern design that makes difference.
                                </li>
                                <li>
                                    <img className="list-icons" src={computerImg} alt="services.png" />
                                    Boost your sales with strategically built user experience.
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="process-header-img">
                        <img className="processes-section-header-img" src={webDesign} alt="Service.png" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default AboutUs;