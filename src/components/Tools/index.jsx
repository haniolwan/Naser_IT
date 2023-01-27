import {
  Container,
} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dspaceImg from '../../assets/tools/dspace.webp';
import vectorImg from '../../assets/tools/vector.webp';
import lauterImg from '../../assets/tools/lauter.webp';
import isoImg from '../../assets/tools/iso-26262.webp';
import spiceImg from '../../assets/tools/aspice2.webp';
import './style.css';

function Tools() {
  return (
    <div className="tools-content">
      <Container className="all-tools">
        <a href="https://www.vector.com/" target="_blank" rel="noreferrer">
          <LazyLoadImage className="vector-tool client-img-100 single-tool" src={vectorImg} alt="clients.svg" />
        </a>
        <a href="https://www.lauterbach.com/" target="_blank" rel="noreferrer">
          <LazyLoadImage className="lauter-tool client-img-50 single-tool" src={lauterImg} alt="clients.svg" />
        </a>
        <a href="https://www.iso.org/standard/43464.html" target="_blank" rel="noreferrer">
          <LazyLoadImage className="iso-tool client-img-100 single-tool" src={isoImg} alt="clients.svg" />
        </a>
        <a href="https://spyro-soft.com/aspice-101-a-guide-to-automotive-spice" target="_blank" rel="noreferrer">
          <LazyLoadImage className="spice-tool client-img-100 single-tool" src={spiceImg} alt="clients.svg" />
        </a>
        <a href="https://www.dspace.com/" target="_blank" rel="noreferrer">
          <LazyLoadImage className="dspace-tool client-img-100 single-tool" src={dspaceImg} alt="clients.svg" />
        </a>
      </Container>
    </div>
  );
}

export default Tools;
