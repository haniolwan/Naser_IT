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
import profileImg from '../../../assets/profile-img.jpg';
import './style.css';


const AboutUs = () => {
    let navigate = useNavigate();

    const scrollPosition = useScrollPosition();
    const { width: windowWidth } = useWindowSize();
    return (
        <>
            {windowWidth <= 1024 ? <StickyNavbar /> : scrollPosition >= 30 ? <StickyNavbar /> : null}
            <div className="services-page-container" data-aos="fade-down">
                {windowWidth > 1024 && <StaticNavbar />}
                <div className="heading-text">
                    <h1>About Us</h1>
                    <p>
                        <span className="home-link" onClick={() => navigate('/')}>Home</span>
                        <img className="right-arrow" src={rightArrowImg} alt="SP.png" />
                        About us
                    </p>
                </div>
            </div>
            <Container className="about-page-content">
                <Row>
                    <Col className="about-page-img">
                        <img className="profile-img" src={profileImg} alt="Aboutus.png" />
                    </Col>
                    <Col className="services-left-content">
                        <div className="services-header">
                            <h1 className="services-header-text">NASER AL-NAWATI</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi fermentum placerat leo, quis imperdiet odio ullamcorper at.
                                Sed lacinia neque at nisl condimentum vestibulum.
                                Aenean aliquet lorem vitae ex rhoncus condimentum.
                                Cras blandit dui a porta malesuada. Nulla et elit ante.
                                Morbi egestas velit vel feugiat condimentum. Aliquam erat volutpat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi fermentum placerat leo, quis imperdiet odio ullamcorper at.
                                Sed lacinia neque at nisl condimentum vestibulum.
                                Aenean aliquet lorem vitae ex rhoncus condimentum.
                                Cras blandit dui a porta malesuada. Nulla et elit ante.
                                Morbi egestas velit vel feugiat condimentum. Aliquam erat volutpat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi fermentum placerat leo, quis imperdiet odio ullamcorper at.
                                Sed lacinia neque at nisl condimentum vestibulum.
                                Aenean aliquet lorem vitae ex rhoncus condimentum.
                                Cras blandit dui a porta malesuada. Nulla et elit ante.
                                Morbi egestas velit vel feugiat condimentum. Aliquam erat volutpat.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default AboutUs;