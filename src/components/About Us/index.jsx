import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img from '../../assets/Header/aboutImg.webp';
import './style.css';

function AboutUs() {
  return (

    <Container className="mt-5 w-100">
      <Row className="about-us-content">
        <Col className="right-content">
          <LazyLoadImage
            className="about-img w-100"
            src={img}
            alt="AboutUs.jpg"
            effect="blur"
          />
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
