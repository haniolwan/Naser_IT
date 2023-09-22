import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/Header/aboutImg.webp";
import "./style.css";

function AboutUs() {
  return (
    <Container className="mt-5">
      <Row className="about-us-content">
        <Col className="right-content">
          <LazyLoadImage
            className="about-img"
            src={img}
            alt="AboutUs.jpg"
            effect="blur"
          />
        </Col>
        <Col className="about-us-left-content">
          <h2 className="about-text">About us</h2>
          <p className="about-description2">
            Seasoned QA Expert: With a strong focus on functional safety, ISO
            standards, and test automation, I ensure the reliability of
            automotive systems. Proven problem-solver, I'm your go-to
            professional for safeguarding automotive technology. Collaborate
            with confidence - effective communication and expertise in QA and
            testing make me an asset for your automotive projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
