import { Container, Row, Col } from 'react-bootstrap';
import searchImg from '../../assets/services/search-card.png';
import walletImg from '../../assets/services/wallet-card.png';
import codeImg from '../../assets/services/code-card.png';
import chartImg from '../../assets/services/chart-card.png';

import './style.css';

const Services = () => {
    return (
        <div>
            <Container >
                <Row className="services-content">
                    <Col className="services-left-content">
                        <h1>How can we help you Business?</h1>
                        <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                    </Col>
                    <Col className="services-right-content">
                        <Row>

                            <Col>
                                <Container className="card-container">
                                    <div className="search-img-container">
                                        <img src={searchImg} class="img-fluid " alt="Services.jpg" />
                                    </div>
                                    <h3>Business Idea Planning</h3>
                                    <p>We present you a proposal and discuss niffty-gritty like</p>
                                </Container>
                                <Container className="card-container">
                                    <div className="code-img-container">
                                        <img src={codeImg} class="img-fluid " alt="Services.jpg" />
                                    </div>
                                    <h3>Development Website and App</h3>
                                    <p>Communication protocols apart from engagement models</p>
                                </Container>
                            </Col>
                            <Col>
                                <Container className="card-container">
                                    <div className="wallet-img-container">
                                        <img src={walletImg} class="img-fluid " alt="Services.jpg" />
                                    </div>
                                    <h3>Financial Planning System</h3>
                                    <p>Protocols apart from aengage models, pricing billing</p>
                                </Container>
                                <Container className="card-container">
                                    <div className="chart-img-container">
                                        <img src={chartImg} class="img-fluid " alt="Services.jpg" />
                                    </div>
                                    <h3>Market Analysis Project</h3>
                                    <p>Protocols apart from aengage models, pricing billing</p>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Services;