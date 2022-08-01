import { Container, Row, Col } from 'react-bootstrap';
import searchImg from '../../assets/services/search-card.png';
import walletImg from '../../assets/services/wallet-card.png';
import codeImg from '../../assets/services/code-card.png';
import chartImg from '../../assets/services/chart-card.png';
import rect1 from '../../assets/services/layers/rect1.png';
import rect2 from '../../assets/services/layers/rect2.png';
import ellipse from '../../assets/services/layers/ellipse.png';
import dots from '../../assets/services/layers/dots.png';
import './style.css';

const Services = () => {
    return (
        <Container>
            <img src={rect1} class="img-fluid services-rect1-img" alt="Services.jpg" />
            <img src={rect2} class="img-fluid services-rect2-img" alt="Services.jpg" />
            <img src={dots} class="img-fluid services-dots-img" alt="Services.jpg" /> 
            <img src={ellipse} class="img-fluid services-ellipse-img" alt="Services.jpg" />
            <Row className="services-content">
                <Col className="services-left-content col-5">
                    <h1>How can we help your Business?</h1>
                    <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                </Col>
                <Col className="services-right-content">
                    <div className="left-cards">
                        <Container className="card-container">
                            <div className="search-img-container">
                                <img src={searchImg} class="img-fluid " alt="Services.jpg" />
                            </div>
                            <h3>Business Idea Planning</h3>
                            <p>We present you a proposal and discuss niffty-gritty like</p>
                        </Container>
                        <Container className="card-container">
                            <div className="code-img-container">
                                <img src={codeImg} className="img-fluid" alt="Services.jpg" />
                            </div>
                            <h3>Development Website and App</h3>
                            <p>Communication protocols apart from engagement models</p>
                        </Container>
                    </div>
                    <div className="right-cards">
                        <Container className="card-container">
                            <div className="wallet-img-container mb-3">
                                <img src={walletImg} className="img-fluid " alt="Services.jpg" />
                            </div>
                            <h3>Financial Planning System</h3>
                            <p>Protocols apart from aengage models, pricing billing</p>
                        </Container>
                        <Container className="card-container">
                            <div className="chart-img-container mb-3">
                                <img src={chartImg} className="img-fluid" alt="Services.jpg" />
                            </div>
                            <h3>Market Analysis Project</h3>
                            <p>Protocols apart from aengage models, pricing billing</p>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;