import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Container,
    Row,
    Col,
    Form,
    InputGroup
} from 'react-bootstrap';
import contactImg from '../../assets/contact.png';
import './style.css';

const { Control, Select } = Form;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
    const form = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const submitForm = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                setError(false)
                setSuccess(true)
            }, () => {
                setError(true)
            });
    }
    return (<Container className="mt-5">
        <Row className="content">
            <Col className="contact-left-content">
                <h1 className="contact-title">
                    Got a question? Get in touch
                </h1>
                <br />
                <Form className="contact-form" ref={form} onSubmit={submitForm}>
                    {
                        error &&
                        <p className="text-danger">An Error occured while trying to send email, Please try again later.</p>
                    }{
                        success &&
                        <p className="text-success">We received your email and we'll contact you as soon as possible.</p>
                    }
                    <InputGroup
                        className="mb-3 contact-first-row"
                    >
                        <Control
                            className='contact-input'
                            name="name"
                            placeholder="Name"
                            aria-label="name"
                            aria-describedby="inputGroup-sizing-default"
                            size="lg"
                            required
                        />
                        <br />
                        <Control
                            className='contact-input'
                            name="email"
                            placeholder="E-mail Address"
                            aria-label="email"
                            type="email"
                            aria-describedby="inputGroup-sizing-default"
                            size="lg"
                            required
                        />
                    </InputGroup>
                    <Select
                        className='contact-input'
                        name="licence"
                        size="lg"
                        required
                        defaultValue={"options"}
                    >
                        <option value={"options"} disabled>Software Licencing</option>
                        <option value={"licence 1"}>licence 1</option>
                        <option value={"licence 2"}>licence 2</option>
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
                        required
                    />
                    <br />
                    <button type="submit" className="btn btn-secondary btn-lg">Submit now</button>
                </Form>
            </Col>
            <Col className="contact-right-content">
                <img src={contactImg} className="img-fluid contact-img" alt="AboutUs.jpg" />
            </Col>
        </Row>
    </Container>
    );
}

export default Contact;