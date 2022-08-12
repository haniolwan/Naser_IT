import {
    Container,
} from 'react-bootstrap';
import './style.css';
import porscheImg from '../../assets/clients/porsche.png';
import lotusImg from '../../assets/clients/lotus.svg';
import geelyImg from '../../assets/clients/geely-prot.png';
import aplImg from '../../assets/clients/apl.png';
import bmwImg from '../../assets/clients/bmw.png';
import scheImg from '../../assets/clients/sche.png';





const OurClients = () => {

    return (
        <div className="clients-content">
            <h2 className="">Our
                <span className="clients"> Clients</span>
            </h2>
            <Container className="all-clients" data-aos="fade-down">
                <a
                    href="https://www.porsche.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="porsche-client client-img-100 single-client" src={porscheImg} alt="clients.svg" />
                </a>
                <a
                    href="https://www.schaeffler.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="sche-client client-img-100 single-client" src={scheImg} alt="clients.svg" />
                </a>
                <a
                    href="https://www.lotuscars.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="lotus-client client-img-50 single-client" src={lotusImg} alt="clients.svg" />
                </a>
                <a
                    href="https://apl-landau.de/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="apl-client client-img-100 single-client" src={aplImg} alt="clients.svg" />
                </a>
                <a
                    href="http://global.geely.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="geely-client client-img-100 single-client" src={geelyImg} alt="clients.svg" />
                </a>
                <a
                    href="http://www.bmwgroup.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="bmw-client client-img-50 single-client" src={bmwImg} alt="clients.svg" />
                </a>
            </Container>
        </div>
    );
}

export default OurClients;