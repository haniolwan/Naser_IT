import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../../assets/aboutImg.png';
import './style.css';
const AboutUs = () => {
    return (
        <Container className="mt-5">
            <Row className="content">
                <Col className="right-content">
                    <img src={aboutImg} className="img-fluid about-image" alt="AboutUs.jpg" />
                </Col>
                <Col className="">
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