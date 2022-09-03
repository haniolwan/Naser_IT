import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import logo from '../../assets/footer/footer-logo.png';
import facebook from '../../assets/footer/facebook.png';
import twitter from '../../assets/footer/twitter.png';
import instagram from '../../assets/footer/instagram.png';

import './style.css';

function Footer() {
  return (
    <div className="footer">
      <Container className=" mt-5">
        <Row className="footer-content">
          <Col className="first-section-footer">
            <div className="footer-logo">
              <img src={logo} alt="Footer.png" />
              <h1 className="footer-section-title">NASER IT</h1>
            </div>
            <p className="footer-discription">
              We provide information about properties such as houses,
              villas and apartments to help people find their dream home
            </p>
            <div className="socials">
              <a href="facebook.com" target="_blank">
                <img src={facebook} alt="Footer.png" />
              </a>
              <a href="twitter.com" target="_blank">
                <img src={twitter} alt="Footer.png" />
              </a>
              <a href="instagram.com" target="_blank">
                <img src={instagram} alt="Footer.png" />
              </a>
            </div>
          </Col>
          <Col className="second-section-footer">
            <h1 className="footer-section-title">Links</h1>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Web development
              </p>
            </a>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Web design
              </p>
            </a>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Quality assurance
              </p>
            </a>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Testing
              </p>
            </a>
          </Col>
          <Col className="third-section-footer">
            <h1 className="footer-section-title">Our Services</h1>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Web development
              </p>
            </a>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Web design
              </p>
            </a>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Quality assurance
              </p>
            </a>
            <a className="footer-link" href="web development">
              <p className="footer-discription">
                Testing
              </p>
            </a>
          </Col>
          <Col className="forth-section-footer">
            <h1 className="footer-section-title">Contact</h1>
            <p className="footer-discription">
              2464 Royal Ln. Mesa, New Jersey 45463
              (671) 555-0110
            </p>
            <p className="footer-discription">
              info@hounter.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
