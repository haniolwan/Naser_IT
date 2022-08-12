import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../../assets/aboutImg.png';
import './style.css';
const AboutUs = ({fade}) => {
    return (
        <Container className="mt-5" data-aos={fade}>
            <Row className="about-us-content">
                <Col className="right-content">
                    <img src={aboutImg} className="img-fluid about-image" alt="AboutUs.jpg" />
                </Col>
                <Col className="about-us-left-content">
                    <h2 className="about-text">About us</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec consequat felis.
                    </p>
                    <p className="about-description2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec consequat felis.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;