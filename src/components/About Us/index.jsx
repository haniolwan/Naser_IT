import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import aboutImg from '../../assets/aboutImg.png';
import './style.css';

function AboutUs() {
  return (
    <Container className="mt-5">
      <Row className="about-us-content">
        <Col className="right-content">
          <LazyLoadImage src={aboutImg} className="img-fluid about-image" alt="AboutUs.jpg" delayTime="2000" />
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
  );
}

export default AboutUs;
