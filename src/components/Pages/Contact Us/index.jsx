import {
  Col,
  Row,
  Container,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Footer,
} from '../..';
import useScrollPosition from '../../../hooks/useScrollPosition';
import useWindowSize from '../../../hooks/useWindowSize';
import StaticNavbar from '../../common/Navbar/StaticNavbar';
import StickyNavbar from '../../common/Navbar/StickyNavbar';
import rightArrowImg from '../../../assets/angle-right-.svg';
import './style.css';

const { Control, Select } = Form;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

function ContactUs() {
  const navigate = useNavigate();

  const scrollPosition = useScrollPosition();
  const { width: windowWidth } = useWindowSize();
  const form = useRef();
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const {
      name, email, licence, message,
    } = e.target;
    if (name.value && email.value && licence.value && message.value) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then(() => {
          setSuccess(true);
          setErrorMsg('');
          setLoading(false);
          e.target.reset();
        }, () => {
          setLoading(false);
          setErrorMsg('Something went wrong.');
        });
    } else {
      setLoading(false);
      setErrorMsg('Please fill out all fields.');
    }
  };
  return (
    <>
      {windowWidth <= 1024 || scrollPosition >= 30 ? <StickyNavbar /> : null}
      <div className="services-page-container" data-aos="fade-down">
        {windowWidth > 1024 && <StaticNavbar />}
        <div className="heading-text">
          <h1>Contact Us</h1>
          <p>
            <span
              className="home-link"
              role="presentation"
              onClick={() => navigate('/')}
            >
              Home
            </span>
            <img className="right-arrow" src={rightArrowImg} alt="SP.png" />
            Contact us
          </p>
        </div>
      </div>
      <Container>
        <Row className="contact-page-row">
          <Col className="contact-form">
            <Row className="contact-form-content">
              <Col className="contact-left-content">
                <h1 className="contact-title">
                  Got a question? Get in touch
                </h1>
                <br />
                <div className="msg-container">
                  {errorMsg && (
                  <p className="error-form-msg">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                  )}
                  {success && (
                    <p className="success-form-msg">
                      Your message has been successfully sent. We will contact you very soon!
                    </p>
                  )}
                </div>
                <Form className="contact-form" ref={form} onSubmit={submitForm}>
                  <InputGroup
                    className="mb-3 contact-first-row"
                  >
                    <Control
                      className="contact-input"
                      name="name"
                      placeholder="Name"
                      aria-label="name"
                      aria-describedby="inputGroup-sizing-default"
                      size="lg"
                    />
                    <br />
                    <Control
                      className="contact-input"
                      name="email"
                      placeholder="E-mail Address"
                      aria-label="email"
                      type="email"
                      aria-describedby="inputGroup-sizing-default"
                      size="lg"
                    />
                  </InputGroup>
                  <Select
                    className="contact-input"
                    name="licence"
                    size="lg"
                    defaultValue=""
                  >
                    <option value="" disabled>Software Licencing</option>
                    <option value="licence 1">licence 1</option>
                    <option value="licence 2">licence 2</option>
                  </Select>
                  <br />
                  <Control
                    name="message"
                    as="textarea"
                    aria-label="Message"
                    placeholder="Message"
                    rows={4}
                    size="lg"
                    maxLength="255"
                  />
                  <br />
                  <div className="button-group">
                    <button type="submit" className={`btn btn-secondary btn-lg submit-button ${success ? 'disabled' : ''}`} onClick={() => setLoading(true)}>
                      <span className="submit-text">Submit Now</span>
                    </button>
                    {loading && <div className="spinner-border" role="status" />}
                    {success && (
                      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    )}
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col className="contactus-map">
            <div className="map">
              <iframe
                title="11"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ContactUs;
