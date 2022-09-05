import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import contactImg from '../../assets/contact.png';

import './style.css';

const { Control, Select } = Form;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

function Contact() {
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
    <Container className="mt-5 w-100">
      <Row className="contact-content">
        <Col className="contact-left-content">
          <h1 className="contact-title">
            Got a question? Get in touch
          </h1>
          <br />
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          {success && <p className="text-success">We received your email and we&apos;ll contact you as soon as possible.</p>}
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
        <Col className="contact-right-content">
          <LazyLoadImage src={contactImg} className="fa-beat-fade img-fluid contact-img w-100" alt="AboutUs.jpg" />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
