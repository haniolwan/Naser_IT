import {
    Container,
} from 'react-bootstrap';
import dspaceImg from '../../assets/tools/dspace.png';
import vectorImg from '../../assets/tools/vector.png';
import lauterImg from '../../assets/tools/lauter.png';
import isoImg from '../../assets/tools/iso-26262.png';
import spiceImg from '../../assets/tools/aspice2.png';
import './style.css';


const Tools = ({ fade }) => {
    return (
        <div className="tools-content" data-aos={fade}>
            <Container className="all-tools">
                <a href="https://www.dspace.com/" target="_blank" rel="noreferrer">
                    <img className="dspace-tool client-img-100 single-tool" src={dspaceImg} alt="clients.svg" />
                </a>
                <a href="https://www.vector.com/" target="_blank" rel="noreferrer">
                    <img className="vector-tool client-img-100 single-tool" src={vectorImg} alt="clients.svg" />
                </a>
                <a href="https://www.lauterbach.com/" target="_blank" rel="noreferrer">
                    <img className="lauter-tool client-img-50 single-tool" src={lauterImg} alt="clients.svg" />
                </a>
                <a href="https://www.iso.org/standard/43464.html" target="_blank" rel="noreferrer">
                    <img className="iso-tool client-img-100 single-tool" src={isoImg} alt="clients.svg" />
                </a>
                <a href="https://spyro-soft.com/aspice-101-a-guide-to-automotive-spice" target="_blank" rel="noreferrer">
                    <img className="spice-tool client-img-100 single-tool" src={spiceImg} alt="clients.svg" />
                </a>
            </Container>
        </div>
    );
}

export default Tools;