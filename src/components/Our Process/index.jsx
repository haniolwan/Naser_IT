import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import noteImg from '../../assets/processes/note.png';
import sectionImg from '../../assets/processes/processes-section.jpg';
import researchImg from '../../assets/processes/research.png';
import profilesImg from '../../assets/processes/profiles.png';
import './style.css';

function OurProcess() {
  return (
    <Container className="process mb-5">
      <div className="process-title mb-4">
        <h1 className="process-section-title">How it Works</h1>
        <p className="process-section-description">
          We follow an organized,
          step-by-step structure to obtain the best possible results for you.
        </p>
      </div>
      <Row className="processes-content">
        <Col className="processes-container">
          {/* Analysis & Design */}
          <div className="single-process" data-aos="fade-down">
            <div className="first-process-img-container">
              <img className="first-process-img" src={noteImg} alt="Process.png" />
            </div>
            <div className="process-description">
              <h2>
                Analysis & Design
              </h2>
              <p className="process-details">
                We THOROUGHLY analyze your business needs to design and
                devise the best solutions for all your functional and non-functional needs.
              </p>
            </div>
          </div>
          <svg x="0px" y="0px" width="312px" height="130px" className="first-dashed-lines">
            <path
              className="dashed1"
              fill="none"
              stroke="rgb(95, 93, 93)"
              strokeWidth="1"
              strokeDasharray="1300"
              strokeDashoffset="0"
              d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"
            />
            <path
              className="dashed2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6"
              strokeDashoffset="1300"
              d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "
            />
          </svg>
          {/* Development */}
          <div className="single-process second-process-container" data-aos="fade-down">
            <div className="process-description">
              <h2>
                Development
              </h2>
              <p className="process-details">
                From coding and test-driven development to a comprehensive analysis,
                and test coverage, every step is meticulously executed to perfection.
                This helps us deliver a stable,
                reliable, and high quality product that we are proud of.
              </p>
            </div>
            <div className="second-process-img-container">
              <img className="second-process-img" src={researchImg} alt="Process.png" />
            </div>
          </div>
          <svg x="0px" y="0px" width="312px" height="130px" className="second-dashed-lines">
            <path
              className="dashed1"
              fill="none"
              stroke="rgb(95, 93, 93)"
              strokeWidth="1"
              strokeDasharray="1300"
              strokeDashoffset="0"
              d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"
            />
            <path
              className="dashed2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6"
              strokeDashoffset="1300"
              d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"
            />
          </svg>
          {/* Testing & Launch */}
          <div className="single-process" data-aos="fade-down">
            <div className="third-process-img-container">
              <img className="third-processs-img" src={profilesImg} alt="Process.png" />
            </div>
            <div className="process-description">
              <h2>
                Testing & Launch
              </h2>
              <p className="process-details">
                From unit testing to integration testing.
                End-to-end to performance tests. Load, and penetration testing.
                Every step will give you the confidence that the solution will endure.
              </p>
            </div>
          </div>
        </Col>
        <Col className="process-background">
          <img className="process-section-img" src={sectionImg} alt="Process.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default OurProcess;
