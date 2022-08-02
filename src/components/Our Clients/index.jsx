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
            <h2 className="client-text">Our Clients</h2>
            <Container className="all-clients">
                <img className="porsche-client client-img-100 single-client" src={porscheImg} alt="clients.svg" />
                <img className="sche-client client-img-100 single-client" src={scheImg} alt="clients.svg" />
                <img className="lotus-client client-img-50 single-client" src={lotusImg} alt="clients.svg" />
                <img className="apl-client client-img-100 single-client" src={aplImg} alt="clients.svg" />
                <img className="geely-client client-img-100 single-client" src={geelyImg} alt="clients.svg" />
                <img className="bmw-client client-img-50 single-client" src={bmwImg} alt="clients.svg" />
            </Container>
        </div>
    );
}

export default OurClients;